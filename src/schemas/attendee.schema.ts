import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Attendee {

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    phoneNumber: number
}

export const AttendeeSchema = SchemaFactory.createForClass(Attendee)