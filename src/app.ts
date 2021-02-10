import express from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './config/database';

// Controllers
import * as competitionController from './controllers';

// Create Express server
const app = express();

// Connect DB
connectToDatabase();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Primary app routes
app.get('/results/:id', competitionController.getResultsByCompetitionId);
app.post('/results', competitionController.postResults);
app.post('/competition', competitionController.postCompetition);
app.get('/ranking/:id', competitionController.getRanking);

export default app;