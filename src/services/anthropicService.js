import { buildAnalysisPrompt } from "./promptBuilder";

export const analyzeResume = async ({
  resume,
  jobDescription,
}) => {
  const prompt = buildAnalysisPrompt(
    resume,
    jobDescription
  );

  console.log(prompt);

  throw new Error(
    "Claude integration not yet configured."
  );
};