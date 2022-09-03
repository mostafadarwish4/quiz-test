import express, { Express, Request, Response } from 'express';
import router from './Routes';
const app:Express = express();
const port = 3002;

app.get('/', (req:Request, res:Response) => {
  res.send('Hello To Vocabulary Api');
});

app.use(router)
app.listen(port, () => {
  return console.log(`App is listening at http://localhost:${port}`);
});