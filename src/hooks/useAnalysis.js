import { useState } from "react";

import { mockAnalysis } from "../utils/mockAnalysis";

import {
  ANALYSIS_STATUS,
} from "../utils/constants";

export const useAnalysis = () => {
  const [status, setStatus] = useState(
    ANALYSIS_STATUS.IDLE
  );

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  const analyze = async () => {
    try {
      setStatus(ANALYSIS_STATUS.LOADING);

      await new Promise((resolve) =>
        setTimeout(resolve, 1800)
      );

      setData(mockAnalysis);

      setStatus(ANALYSIS_STATUS.SUCCESS);
    } catch {
      setError("Analysis failed.");

      setStatus(ANALYSIS_STATUS.ERROR);
    }
  };

  return {
    status,
    data,
    error,
    analyze,
  };
};