import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Put,
  Res,
  Query,
  Logger,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import * as MovieDTO from './DTO/movie.dto';
import { Response } from 'express';

@Controller('movie')
export class MovieController {
  private readonly logger = new Logger(MovieController.name);
  constructor(private movieService: MovieService) {}

  @Post('add')
  async addMovie(
    @Body() addMovieData: MovieDTO.AddMovieDTO,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.addMovie(addMovieData, res);
  }

  @Get('list')
  async movieList(
    @Query() movieListDTO: MovieDTO.MovieListDTO,
    @Res() res: Response,
  ): Promise<void> {
    this.logger.log(movieListDTO);
    this.movieService.movieList(movieListDTO, res);
  }

  @Delete('delete')
  async deleteMovie(): Promise<void> {
    this.movieService.deleteMovie();
  }

  @Put('update')
  async updateMovie(): Promise<void> {
    this.movieService.updateMovie();
  }
}
