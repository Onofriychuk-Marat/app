import { IsString } from 'class-validator';

export class IssueDto {
  @IsString()
  readonly title: number;

  @IsString()
  readonly body: string;
}
