import { Injectable, Logger } from '@nestjs/common';
import * as MovieDTO from './DTO/movie.dto';
import { Database } from '../utils/database';
import { Response } from 'express';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);
  public addMovie(addMovieData: MovieDTO.AddMovieDTO, res: Response) {
    this.logger.debug(addMovieData);
    const db: Database = new Database();
    const queryItems: any[] = Object.values(addMovieData);
    const query = `insert into movie_tb (opening_date, title, grade, still_shots, description, modifier, update_dt) values (?,?,?,?,?,?,NOW());`;
    db.ExecuteQuery(query, queryItems, (err, results, fields) => {
      res.send(results);
    });
    return;
  }

  public movieList(movieListData: MovieDTO.MovieListDTO, res: Response) {
    this.logger.debug(movieListData);
    const query = `select seq,opening_date,title,grade,still_shots,description,modifier,update_dt from movie_tb limit 0,?;`;
    const queryItems: any[] = Object.values(movieListData);
    const db: Database = new Database();
    db.ExecuteQuery(query, queryItems, (err, results, fileds) => {
      res.send(results);
    });
    return;
  }

  public deleteMovie() {
    return;
  }

  public updateMovie() {
    return;
  }
}
