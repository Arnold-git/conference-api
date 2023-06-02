import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Talk } from '../schemas/talk.schema';
import { Attendee } from '../schemas/attendee.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class TalkService {
  constructor(
    @InjectModel(Talk.name)
    private talkModel: mongoose.Model<Talk>,

    @InjectModel(Attendee.name)
    private attendeeModel: mongoose.Model<Attendee>,
  ) {}

  async findAll(): Promise<Talk[]> {
    const talks = await this.talkModel.find();
    return talks;
  }

  async create(talk: Talk): Promise<Talk> {
    const response = await this.talkModel.create(talk);
    return response;
  }

  async findById(id: string): Promise<Talk> {
    const talk = await this.talkModel.findById(id);

    if (!talk) {
      throw new NotFoundException('Talk not found');
    }

    return talk;
  }

  async updateById(id: string, talk: Talk): Promise<Talk> {
    return await this.talkModel.findByIdAndUpdate(id, talk, {
      new: true,
      runValidators: true,
    });
  }

  async addAttendee(talkId: string, attendeeId: string): Promise<Talk> {
    const talk = await this.talkModel.findById(talkId);
 
    if (!talk) {
      throw new NotFoundException('Talk not found');
    }

    const attendee = await this.attendeeModel.findById(attendeeId);

    if (!attendee) {
      throw new NotFoundException('Attendee not found');
    }

    talk.attendees.push(attendee)

    return talk.save()

  }


  async deleteById(id: string): Promise<Talk> {
    return await this.talkModel.findByIdAndDelete(id);
  }
}
