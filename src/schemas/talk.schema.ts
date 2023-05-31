import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Attendee } from './attendee.schema';

export enum Category {
  TECHNICAL = 'Advebture',
  LIFESTYYLE = 'Lifestyle',
  ADVENTURE = 'Adventure',
  MEDICINE = 'Medicine',
  ENGINEERING = 'Engineering',
}

@Schema({
  timestamps: true,
})
export class Talk {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  attendees: Attendee[];

  category: Category;
}

export const TalkSchema = SchemaFactory.createForClass(Talk);
