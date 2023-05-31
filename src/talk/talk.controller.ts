import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TalkService } from './talk.service';
import { Talk } from '../schemas/talk.schema';
import { CreateTalkDto } from '../dto/create-talk.dto';
import { UpdateTalkDto } from '../dto/update-book.dto';
import { AddAttendeeToTalk } from 'src/dto/add-attendee.dto';

@Controller('talk')
export class TalkController {
  constructor(private talkService: TalkService) {}

  @Get()
  async getAllTalks(): Promise<Talk[]> {
    return this.talkService.findAll();
  }

  @Post('new')
  async createTalk(
    @Body()
    talk: CreateTalkDto,
  ): Promise<Talk> {
    return this.talkService.create(talk);
  }

  @Get(':id')
  async getTalk(
    @Param('id')
    id: string,
  ): Promise<Talk> {
    return this.talkService.findById(id);
  }

  @Put(':id')
  async UpdateTalk(
    @Param('id')
    id: string,
    @Body()
    talk: UpdateTalkDto,
  ): Promise<Talk> {
    return this.talkService.updateById(id, talk);
  }

  @Delete(':id')
  async deleteTalk(
    @Param('id')
    id: string,
  ): Promise<Talk> {
    return this.talkService.deleteById(id);
  }

  @Post('add-attendee')
  async addAttendee(
    @Body()
    dto: AddAttendeeToTalk,
  ): Promise<Talk> {
    return this.talkService.addAttendee(dto.talkId, dto.attendeeId);
  }
}
