import { analyzeResume }
  from "../services/anthropicService";

import { parseAnalysisResponse }
  from "../services/parser";

export const useClaude = () => {
  const analyze = async (
    resume,
    jobDescription
  ) => {
    const response =
      await analyzeResume({
        resume,
        jobDescription,
      });

    return parseAnalysisResponse(
      response.result
    );
  };

  return {
    analyze,
  };
};