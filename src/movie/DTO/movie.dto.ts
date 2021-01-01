import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
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
  @IsString()
  readonly modifier: string;
}

export class MovieListDTO {
  @IsNumber()
  @Type(() => Number)
  page: number;
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
  @IsString()
  readonly modifier: string;
}
