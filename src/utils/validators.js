import {
  MAX_JOB_DESCRIPTION_LENGTH,
  MAX_RESUME_LENGTH,
} from "./constants";

export const validateResume = (resume) => {
  if (!resume?.trim()) {
    return "Resume is required.";
  }

  if (resume.length > MAX_RESUME_LENGTH) {
    return "Resume exceeds maximum size.";
  }

  return null;
};

export const validateJobDescription = (jobDescription) => {
  if (!jobDescription?.trim()) {
    return "Job description is required.";
  }

  if (
    jobDescription.length >
    MAX_JOB_DESCRIPTION_LENGTH
  ) {
    return "Job description exceeds maximum size.";
  }

  return null;
};