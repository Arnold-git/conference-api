import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Attendee } from '../schemas/attendee.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class AttendeeService {
  constructor(
    @InjectModel(Attendee.name)
    private attendeeModel: mongoose.Model<Attendee>,
  ) {}

  async findAll(): Promise<Attendee[]> {
    const attendees = await this.attendeeModel.find();
    return attendees;
  }

  async create(attendee: Attendee): Promise<Attendee> {
    const response = await this.attendeeModel.create(attendee);
    return response;
  }

  async deleteById(id: string): Promise<Attendee> {
    return await this.attendeeModel.findByIdAndDelete(id);
  }
}
