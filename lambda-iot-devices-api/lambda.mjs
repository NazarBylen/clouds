import express from 'express';
import serverless from 'serverless-http';
import routes from './router.mjs';

const app = express()

app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
    res.status(404).send();
});

app.use((req, res, next) => {
    res.status(err.status || 500).send();
});



export const handler  = serverless(app);
