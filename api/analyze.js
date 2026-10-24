import Anthropic from "@anthropic-ai/sdk";

console.log(
  "ANTHROPIC_API_KEY loaded:",
  !!process.env.ANTHROPIC_API_KEY
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(
  req,
  res
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    console.log(
      "Received analysis request"
    );

    const {
      resume,
      jobDescription,
    } = req.body;

    console.log("Resume length:", resume?.length);
    console.log(
      "Job description length:",
      jobDescription?.length
    );

    const prompt = `
You are an ATS and career advisor.

Analyze the resume against the job description.

Return ONLY valid JSON with no markdown, no explanations, and no code fences.

{
  "matchScore": 0,
  "strengths": [],
  "missingSkills": [],
  "recommendations": [],
  "interviewQuestions": [],
  "coverLetterBullets": []
}

Resume:
${resume}

Job Description:
${jobDescription}
`;

    const response =
      await anthropic.messages.create({
        model:
          "claude-sonnet-4-20250514",
        max_tokens: 1500,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    console.log(
      "Claude response received"
    );

    const content =
      response.content[0].text;

    return res.status(200).json({
      result: content,
    });
  } catch (error) {
    console.error(
      "Claude API Error:",
      error
    );

    return res.status(500).json({
      error: "Analysis failed",
    });
  }
}