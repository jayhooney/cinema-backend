import { Injectable, Logger } from '@nestjs/common';
import * as MovieDTO from './DTO/movie.dto';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);
  public addMovie(addMovieData: MovieDTO.AddMovieDTO) {
    this.logger.debug(addMovieData);
    return;
  }

  public movieList() {
    return;
  }

  public deleteMovie() {
    return;
  }

  public updateMovie() {
    return;
  }
}
