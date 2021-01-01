import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Res,
  Query,
  Patch,
  Param,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import * as MovieDTO from './DTO/movie.dto';
import { Response } from 'express';

@Controller('movie')
export class MovieController {
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
    this.movieService.movieList(movieListDTO, res);
  }

  @Delete(':seq')
  async deleteMovie(
    @Param('seq') seq: number,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.deleteMovie(seq, res);
  }

  @Patch(':id')
  async updateMovie(
    @Param('id') seq: number,
    @Body() updateMovieDTO: MovieDTO.UpdateMovieDTO,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.updateMovie(seq, updateMovieDTO, res);
  }
}
