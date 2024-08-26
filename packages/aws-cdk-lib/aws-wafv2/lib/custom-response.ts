import { ContentType } from './enums';

export interface CustomResponseBody {
  readonly content: string;
  readonly contentType: ContentType;
}
