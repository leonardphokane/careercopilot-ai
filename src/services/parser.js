import { analysisSchema } from "../schemas/analysisSchema";

export const parseAnalysisResponse = (
  response
) => {
  try {
    const parsed =
      typeof response === "string"
        ? JSON.parse(response)
        : response;

    return analysisSchema.parse(parsed);
  } catch (error) {
    throw new Error(
      "Failed to parse AI response."
    );
  }
};