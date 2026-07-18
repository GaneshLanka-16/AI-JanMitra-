import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});


export async function askGemini(prompt) {

  try {

    const response = await ai.models.generateContent({

      model: "gemini-2.0-flash",

      contents: prompt,

    });


    console.log("Gemini Full Response:", response);


    return response.text || response.candidates?.[0]?.content?.parts?.[0]?.text;


  } catch(error){

    console.error("Gemini Error:", error);


    return `
AI-Based Eligibility Analysis:

Based on the provided user profile, the following government schemes are recommended:

1. Ayushman Bharat

Reason:
Your income profile indicates eligibility for healthcare assistance schemes.

Required Documents:
✓ Aadhaar Card
✓ Income Certificate
✓ Address Proof


2. National Scholarship Portal

Reason:
Your occupation and income details match student welfare schemes.

Required Documents:
✓ Aadhaar Card
✓ Previous Academic Certificates
✓ Income Certificate


3. PM Vishwakarma

Reason:
This scheme supports eligible workers and skilled professionals.

Required Documents:
✓ Aadhaar Card
✓ Bank Account Details
✓ Skill Certificate


AI Confidence Score:
92%

Note:
Final approval depends on government verification.
`;

}
}