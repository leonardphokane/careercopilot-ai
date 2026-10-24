import { z } from "zod";

export const analysisSchema = z.object({
  matchScore: z.number().min(0).max(100),

  strengths: z.array(z.string()),

  missingSkills: z.array(z.string()),

  recommendations: z.array(z.string()),

  interviewQuestions: z.array(z.string()),

  coverLetterBullets: z.array(z.string()),
});