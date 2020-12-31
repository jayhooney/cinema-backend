import { createPool, Pool, PoolConfig, queryCallback, Query } from 'mysql';
import { Logger } from '@nestjs/common';

export class Database {
  private readonly logger = new Logger(Database.name);

  private dbConf: PoolConfig = {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    database: String(process.env.DB_NAME),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PW),
    waitForConnections: Boolean(process.env.DB_WAITFORCONNECTION),
    multipleStatements: Boolean(process.env.DB_MULTIPLESTATEMENTS),
    connectionLimit: Number(process.env.DB_CONNECTIONLIMMIT),
  };

  private pool: Pool = createPool(this.dbConf);

  public ExecuteQuery = (
    query: string,
    params: any,
    callback: queryCallback,
  ): void => {
    this.logger.debug('start execute qeury . . .');
    this.pool.getConnection((connErr, conn) => {
      if (connErr) {
        this.logger.error('get connection failed!');
        this.logger.error(connErr);
        callback(connErr, null, []);
      } else {
        this.logger.debug('successfully got one connection from pool !');

        const execSQL: Query = conn.query(
          query,
          params,
          (execErr, result, fields) => {
            if (execErr) {
              switch (execErr.errno) {
                case 1062: // duplicate
                  this.logger.warn(`${execErr.message}`);
                  break;
                default:
                  this.logger.error('query execute failed.');
                  this.logger.error(`${execErr.errno}`);
                  this.logger.error(`${execErr.message}`);
                  this.logger.error(`${execErr.sql}`);
                  this.logger.error(`${execErr.sqlMessage}`);
                  break;
              }
              callback(execErr, null, []);
            } else {
              this.logger.log('successfully query executed');
              this.logger.debug(`result : ${result}`);
              callback(null, result, fields);
            }
          },
        );

        this.logger.debug(`FINAL QUERY : ${execSQL.sql}`);
      }
      // 커넥션 객체를 풀어줍니다.
      conn.release();
      this.logger.log('Connection Successfully released.');
    });
  };
}
