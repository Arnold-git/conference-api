import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AttendeeService } from './attendee.service';
import { Attendee } from '../schemas/attendee.schema';

@Controller('attendee')
export class AttendeeController {
  constructor(private attendeeService: AttendeeService) {}

  @Get()
  async getAllAttendee(): Promise<Attendee[]> {
    return this.attendeeService.findAll();
  }

  @Post('new')
  async createAttendee(
    @Body()
    attendee,
  ): Promise<Attendee> {
    return this.attendeeService.create(attendee);
  }

  @Delete(':id')
  async deleteAttendee(
    @Param('id')
    id: string,
  ): Promise<Attendee> {
    return this.attendeeService.deleteById(id);
  }
}
