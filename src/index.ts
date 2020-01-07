import express, {Request, Response} from 'express';
import morgan from 'morgan';
import {logger, morganOption} from './config/logger';

const app: express.Application = express();

const port: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(morgan('combined', morganOption));
app.get('/', (req: Request, res: Response) => res.json({name: 'Cesar Peña'}));

app.listen(port, () => logger.info(`Example app listening on port ${port}!`));
