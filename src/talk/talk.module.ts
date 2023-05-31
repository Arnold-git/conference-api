import { Module } from '@nestjs/common';
import { TalkController } from './talk.controller';
import { TalkService } from './talk.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TalkSchema } from '../schemas/talk.schema';
import { AttendeeSchema } from 'src/schemas/attendee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Talk', schema: TalkSchema }]),
    MongooseModule.forFeature([{ name: 'Attendee', schema: AttendeeSchema }]),
  ],
  controllers: [TalkController],
  providers: [TalkService],
})
export class TalkModule {}
