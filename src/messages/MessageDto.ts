import { IsString, IsNotEmpty, Max } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsNotEmpty()
  @Max(250)
  text: string;
}
