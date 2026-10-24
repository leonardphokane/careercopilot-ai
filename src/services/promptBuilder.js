export const buildAnalysisPrompt = (
  resume,
  jobDescription
) => `
You are an ATS and recruiting assistant.

Analyze the resume against the job description.

Return ONLY valid JSON.

Resume:
${resume}

Job Description:
${jobDescription}

Response schema:

{
  "matchScore": number,
  "strengths": [],
  "missingSkills": [],
  "recommendations": [],
  "interviewQuestions": [],
  "coverLetterBullets": []
}
`;