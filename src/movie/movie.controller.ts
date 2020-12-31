import { Controller, Body, Post, Get, Delete, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import * as MovieDTO from './DTO/movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post('add')
  async addMovie(@Body() addMovieData: MovieDTO.AddMovieDTO): Promise<void> {
    this.movieService.addMovie(addMovieData);
  }

  @Get('list')
  async movieList(): Promise<void> {
    this.movieService.movieList();
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
