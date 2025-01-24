import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`APP is running at http://localhost:${PORT}`));

export default app;