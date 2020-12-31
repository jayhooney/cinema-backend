import { Controller, Body, Post, Get, Delete, Put, Res } from '@nestjs/common';
import { MovieService } from './movie.service';
import * as MovieDTO from './DTO/movie.dto';
import { Response, response } from 'express';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post('add')
  async addMovie(
    @Body() addMovieData: MovieDTO.AddMovieDTO,
    @Res() res: Response,
  ): Promise<void> {
    this.movieService.addMovie(addMovieData, res);
  }

  @Get('list')
  async movieList(@Res() res: Response): Promise<void> {
    this.movieService.movieList(res);
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
