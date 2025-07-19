import * as mongoose from 'mongoose';

export const SectionSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  sections: { type: [String], required: true },
});

export interface Section {
  prompt: string;
  sections: string[];
}