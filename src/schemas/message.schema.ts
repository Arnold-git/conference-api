import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Attendee } from './attendee.schema';
import { Talk } from "./talk.schema";
import { Document, Types, Schema as MongooseSchema } from 'mongoose';


@Schema({
    timestamps: true
})

export class Message {

    @Prop()
    content: string;

    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Attendee' })
    attendeeId: Types.ObjectId

    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Talk' })
    talkId: Types.ObjectId

    @Prop()
    createdAt: Date

}

export const MessageSchema = SchemaFactory.createForClass(Message)