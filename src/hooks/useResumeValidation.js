import {
  validateResume,
  validateJobDescription,
} from "../utils/validators";

export const useResumeValidation = () => {
  const validate = (
    resume,
    jobDescription
  ) => {
    const resumeError =
      validateResume(resume);

    const jobError =
      validateJobDescription(
        jobDescription
      );

    return {
      resumeError,
      jobError,
      valid:
        !resumeError && !jobError,
    };
  };

  return { validate };
};