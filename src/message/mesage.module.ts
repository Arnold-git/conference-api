import { Module } from '@nestjs/common';
import { MessagesController } from './message.controller';
import { MessagesService } from './message.service';
import { MessageSchema } from '../schemas/message.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageGateway } from './message.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  exports: [],
  controllers: [MessagesController],
  providers: [MessagesService, MessageGateway],
})
export class MessagesModule {}
