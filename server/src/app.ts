import express, { Express, Request, Response } from 'express';
import router from './Routes';
const app:Express = express();
import bodyParser from 'body-parser';
import cors from 'cors';
const port = 5000;
app.use(express.json({strict: false}));
app.use(cors())


app.get('/', (req:Request, res:Response) => {
  res.send('Hello To Vocabulary Api');
});
app.use(router)
app.listen(port, () => {
  return console.log(`App is listening at http://localhost:${port}`);
});