import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import OpenAI from 'openai'; // Make sure to install: npm install openai


const openai = new OpenAI({
  apiKey: process.env.OPENAIKEY,
  dangerouslyAllowBrowser: true, // For client-side use (not recommended for production)
});

config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(json({ limit: "20kb" }));
app.use(urlencoded({ extended: true, limit: "20kb" }));
app.get("/", async(req, res) => {
    const foodInput =req.body;
  const prompt = `Provide the nutritional values for ${foodInput} including calories, protein, carbs, fats, and other key nutrients in a structured format.`
  if (!process.env.OPENAIKEY) {
     
      return res.json({message:'API key is missing. Please set it in your environment variables.'});
    
    }

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
        const data = response.choices[0].message.content;
        res.json({ data });
    } catch (err) {
      console.error(err);
       return res.status(500).json({ message: 'Error fetching data. Please try again later.' });
    }
})
app.use((req, res, next) => {
  console.log(`Unhandled request: ${req.method} ${req.originalUrl}`);
  res.status(404).send("Route not found");
});

export default app;
