import express, { Express, Request, Response } from 'express';
import router from './Routes';
const app:Express = express();
import cors from 'cors';
const port = 3002;

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req:Request, res:Response) => {
  res.send('Hello To Vocabulary Api');
});
app.use(router)
app.listen(port, () => {
  return console.log(`App is listening at http://localhost:${port}`);
});