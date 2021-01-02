import { IsNumber, IsString } from 'class-validator';
export class AddMovieDTO {
  @IsString()
  readonly openingDate: string;
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly grade: number;
  @IsString()
  readonly stillShots: string;
  @IsString()
  readonly description: string;
}

export class UpdateMovieDTO {
  @IsString()
  readonly openingDate: string;
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly grade: number;
  @IsString()
  readonly stillShots: string;
  @IsString()
  readonly description: string;
}
