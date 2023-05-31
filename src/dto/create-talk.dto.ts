import { Category } from '../schemas/talk.schema';
import { Attendee } from '../schemas/attendee.schema';

export class CreateTalkDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly attendees: Attendee[];
  readonly category: Category;
}
