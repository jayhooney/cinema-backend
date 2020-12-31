import { IsNumber, IsString } from 'class-validator';

export class AddMovieDTO {
  @IsString()
  readonly openingDate: string;
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly grade: number;
  @IsString()
  readonly still_shots: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly modifier: string;
}
