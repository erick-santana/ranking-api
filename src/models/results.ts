import mongoose from 'mongoose';

export type ResultsDocument = mongoose.Document & {
    competition_id: string;
    competition: string;
    athlete: string;
    value: number;
    unit: string;
};

const resultsSchema = new mongoose.Schema({
    competition_id: String,
    competition: String,
    athlete: String,
    value: Number,
    unit: String
}, { timestamps: true });

export const Results = mongoose.model<ResultsDocument>("Results", resultsSchema);