import { Request, Response } from 'express';
import { Competition } from '../models' 

export const postCompetition = async (req: Request, res: Response) => {
    const { competition_id, name } = req.body;

    try {
        if (!name || !competition_id) {
            res.status(400).send('Adicione valores válidos');
        }

        const newCompetition = { 
            competition_id: competition_id,
            name: name
        };

        await Competition.create(newCompetition);

        res.status(201).send(newCompetition);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};