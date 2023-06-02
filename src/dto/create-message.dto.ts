import { Talk } from 'src/schemas/talk.schema';
import { Attendee } from '../schemas/attendee.schema';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export class CreateMessageDto {
  readonly content: string;
  readonly attendeeId: Types.ObjectId;
  readonly talkId: Types.ObjectId
}