import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});


async function checkModels(){

  const models = await ai.models.list();

  for await (const model of models) {
    console.log(model.name);
  }

}

checkModels();