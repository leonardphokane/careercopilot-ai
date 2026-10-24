import {
  describe,
  test,
  expect,
} from "vitest";

import { mockAnalysis } from "../utils/mockAnalysis";

describe(
  "analysis data structure",
  () => {
    test(
      "contains match score",
      () => {
        expect(
          mockAnalysis.matchScore
        ).toBeGreaterThanOrEqual(0);

        expect(
          mockAnalysis.matchScore
        ).toBeLessThanOrEqual(100);
      }
    );

    test(
      "contains strengths",
      () => {
        expect(
          mockAnalysis.strengths
        ).toBeInstanceOf(Array);
      }
    );
  }
);