import { Results, ResultsDocument } from '../models';
import { Request, Response } from 'express';

export const getResultsByCompetitionId = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const results: ResultsDocument[] = await Results.find({competition_id: id});

        if (!results) {
            res.sendStatus(404);
        }

        res.status(200).send(results);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const postResults = async (req: Request, res: Response) => {
    const { competition_id, competition, athlete, value, unit } = req.body;
    
    try {
        const competitorResult: ResultsDocument = await Results.create({
            competition_id: competition_id, 
            competition: competition, 
            athlete: athlete, 
            value: value, 
            unit: unit
        });

        if (!competition_id || !competition || !athlete || !value || !unit) {
            res.sendStatus(400);
        }

        res.status(200).send(competitorResult);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getRanking = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const results: ResultsDocument[] = await Results.find({competition_id: id});

        if (!results) {
            res.sendStatus(404);
        }

        const finalResult: ResultsDocument[] = results.sort((a: any, b: any): any => {
            if (results[0].unit === 'm') {
                if (parseFloat(a.value) > parseFloat(b.value)) {
                    return -1;
                }
            }
            if (results[0].unit === 's') {
                if (parseFloat(a.value) < parseFloat(b.value)) {
                    return -1;
                }
            }
        })

        res.status(200).send(finalResult);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};