import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from '../schemas/message.schema';
import { MessagesService } from './message.service';
import { CreateMessageDto } from '../dto/create-message.dto';


@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async getAllMessages(): Promise<Message[]> {
    const messages = await this.messagesService.getAllMessages();
    return messages;
  }

  @Get(':id')
  async getMessageById(@Param('id') id: string): Promise<Message> {
    const message = await this.messagesService.getMessageById(Number(id));
    return message;
  }




    @Post()
    async CreateMessageDto(
        @Body()
        dto: CreateMessageDto
    ): Promise<Message> {
        return this.messagesService.createMessage(dto
        )
    }
}
