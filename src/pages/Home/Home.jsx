import { useState } from "react";

import ResumeUploader from "../../components/ResumeUploader/ResumeUploader";
import JobDescriptionInput from "../../components/JobDescriptionInput/JobDescriptionInput";
import AnalyzeButton from "../../components/AnalyzeButton/AnalyzeButton";

import LoadingState from "../../components/LoadingState/LoadingState";
import ErrorState from "../../components/ErrorState/ErrorState";

import MatchScoreCard from "../../components/MatchScoreCard/MatchScoreCard";
import StrengthsList from "../../components/StrengthsList/StrengthsList";
import MissingSkills from "../../components/MissingSkills/MissingSkills";
import Recommendations from "../../components/Recommendations/Recommendations";
import InterviewPrep from "../../components/InterviewPrep/InterviewPrep";
import CoverLetterBullets from "../../components/CoverLetterBullets/CoverLetterBullets";
import ExportReportButton from "../../components/ExportReportButton/ExportReportButton";

import { useAnalysis } from "../../hooks/useAnalysis";
import { useResumeValidation } from "../../hooks/useResumeValidation";

export default function Home() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [resumeError, setResumeError] =
    useState(null);

  const [jobError, setJobError] =
    useState(null);

  const {
    status,
    data,
    error,
    analyze,
  } = useAnalysis();

  const { validate } =
    useResumeValidation();

  const handleAnalyze = async () => {
    const validation = validate(
      resume,
      jobDescription
    );

    setResumeError(
      validation.resumeError
    );

    setJobError(
      validation.jobError
    );

    if (!validation.valid) {
      return;
    }

    await analyze(
      resume,
      jobDescription
    );
  };

  return (
    <main>
      <h1>CareerCopilot AI</h1>

      <ResumeUploader
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
        error={resumeError}
      />

      <JobDescriptionInput
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }
        error={jobError}
      />

      <AnalyzeButton
        loading={status === "loading"}
        onClick={handleAnalyze}
      />

      {status === "loading" && (
        <LoadingState />
      )}

      {error && (
        <ErrorState
          message={error}
        />
      )}

      {data && (
        <>
          <MatchScoreCard
            score={data.matchScore}
          />

          <StrengthsList
            items={data.strengths}
          />

          <MissingSkills
            items={data.missingSkills}
          />

          <Recommendations
            items={
              data.recommendations
            }
          />

          <InterviewPrep
            items={
              data.interviewQuestions
            }
          />

          <CoverLetterBullets
            items={
              data.coverLetterBullets
            }
          />

          <ExportReportButton
            data={data}
          />
        </>
      )}
    </main>
  );
}