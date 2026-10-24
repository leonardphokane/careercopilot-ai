import {
  describe,
  test,
  expect,
} from "vitest";

import {
  validateResume,
  validateJobDescription,
} from "../utils/validators";

describe("validateResume", () => {
  test(
    "returns error for empty resume",
    () => {
      expect(
        validateResume("")
      ).toBe(
        "Resume content is required."
      );
    }
  );

  test(
    "returns null for valid resume",
    () => {
      expect(
        validateResume(
          "Frontend Developer with React experience"
        )
      ).toBeNull();
    }
  );
});

describe(
  "validateJobDescription",
  () => {
    test(
      "returns error for empty job description",
      () => {
        expect(
          validateJobDescription("")
        ).toBe(
          "Job description is required."
        );
      }
    );

    test(
      "returns null for valid job description",
      () => {
        expect(
          validateJobDescription(
            "Looking for a React developer with JavaScript experience."
          )
        ).toBeNull();
      }
    );
  }
);