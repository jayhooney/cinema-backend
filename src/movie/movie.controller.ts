import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Res,
  Query,
  Logger,
  Patch,
  Param,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import * as MovieDTO from './DTO/movie.dto';
import { Response } from 'express';

@Controller('movie')
export class MovieController {
  private readonly logger = new Logger(MovieController.name);
  constructor(private movieService: MovieService) {}

  @Post()
  async addMovie(
    @Body() addMovieData: MovieDTO.AddMovieDTO,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.addMovie(addMovieData, res);
  }

  @Get()
  async movieList(
    @Query() movieListDTO: MovieDTO.MovieListDTO,
    @Res() res: Response,
  ): Promise<void> {
    this.logger.log(movieListDTO);
    this.movieService.movieList(movieListDTO, res);
  }

  @Delete(':id')
  async deleteMovie(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.deleteMovie(id, res);
  }

  @Patch(':id')
  async updateMovie(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.updateMovie(id, res);
  }
}
