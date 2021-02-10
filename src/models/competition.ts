import mongoose from 'mongoose';

export type CompetitionDocument = mongoose.Document & {
    competition_id: string
    name: string;
};

const competitionSchema = new mongoose.Schema({
    competition_id: String,
    name: String
}, { timestamps: true });

export const Competition = mongoose.model<CompetitionDocument>("Competition", competitionSchema);