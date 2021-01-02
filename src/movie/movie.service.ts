import { Injectable, Logger } from '@nestjs/common';
import * as MovieDTO from './DTO/movie.dto';
import { Database } from '../utils/database';
import { Response } from 'express';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);

  public addMovie(addMovieData: MovieDTO.AddMovieDTO, res: Response) {
    const queryItems: any[] = Object.values(addMovieData);
    const query = `insert into movie_tb (opening_date, title, grade, still_shots, description, update_dt) values (?,?,?,?,?,NOW());`;
    Database.getInstance().ExecuteQuery(
      query,
      queryItems,
      (err, results, fields) => {
        res.send(results);
      },
    );
    return;
  }

  public movieList(movieListData: MovieDTO.MovieListDTO, res: Response) {
    movieListData.page = (movieListData.page - 1) * 10;
    const queryItems: any[] = Object.values(movieListData);
    const query = `select seq as seq,date_format(opening_date,'%Y-%m-%d') as openingDate,title as title,grade as grade,still_shots as stillShots,description as description from movie_tb;`;
    Database.getInstance().ExecuteQuery(
      query,
      queryItems,
      (err, results, fileds) => {
        res.send(results);
      },
    );
    return;
  }

  public deleteMovie(seq: number, res: Response) {
    const queryItems: any[] = [seq];
    const query = `delete from movie_tb where seq = ?;`;
    Database.getInstance().ExecuteQuery(
      query,
      queryItems,
      (err, results, fileds) => {
        res.send(results);
      },
    );
    return;
  }

  public updateMovie(
    id: number,
    updateMovieDTO: MovieDTO.UpdateMovieDTO,
    res: Response,
  ) {
    const queryItems: any[] = Object.values(updateMovieDTO);
    queryItems.push(id);
    const query = `update movie_tb set opening_date=?, title=?, grade=?, still_shots=?, description=?, update_dt=NOW() where seq = ?;`;

    Database.getInstance().ExecuteQuery(
      query,
      queryItems,
      (err, results, fileds) => {
        res.send(results);
      },
    );
    return;
  }
}
