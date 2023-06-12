import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from '../schemas/message.schema';
import { MessageGateway } from './message.gateway';
import * as mongoose from 'mongoose';
import { CreateMessageDto } from '../dto/create-message.dto';


export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private messagesModel: mongoose.Model<Message>,


    private messageGateWay: MessageGateway
  ) {}

  async getAllMessages() {
    const messages = this.messagesModel.find();
    return messages;
  }

  async getMessageById(id: number) {
    const message = await this.messagesModel.findById(id);
    if (message) {
      return message;
    }
    throw new NotFoundException('Could not find the message');
  }

  async createMessage(dto: CreateMessageDto) {
    const newMessage = await this.messagesModel.create(dto);
    this.messageGateWay.wss.emit(dto.talkId.toString(), newMessage)
    return newMessage;
  }
}