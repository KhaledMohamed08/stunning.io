import * as mongoose from 'mongoose';

export const SectionSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  sections: { type: [String], required: true },
  createdAt: { 
    type: Date, 
    default: () => {
      const cairoTime = new Date();
      cairoTime.setHours(cairoTime.getHours() + 2);
      return cairoTime;
    }
  },
});

export interface Section {
  prompt: string;
  sections: string[];
  createdAt: Date;
}