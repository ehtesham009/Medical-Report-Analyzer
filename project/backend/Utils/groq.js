const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function analyzeMedicalReport(reportText) {

  const completion =
    await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content:
            "You are a medical report analyzer. Explain results in simple language and mention abnormal values."
        },
        {
          role: "user",
          content: reportText
        }
      ],

      temperature: 0.3,
      max_tokens: 1000

    });

  return completion.choices[0].message.content;
}

module.exports = analyzeMedicalReport;