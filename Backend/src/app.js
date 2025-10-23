import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import OpenAI from 'openai';
import sendEmail from "./utils/sendEmail.js";
import { configDotenv } from "dotenv";
configDotenv()
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, 
});
   
config();
const app = express();
app.use(cors({ origin: "https://demo-project-gules.vercel.app", credentials: true }));
app.use(json({ limit: "20kb" }));
app.use(urlencoded({ extended: true, limit: "20kb" }));
app.get("/calculate", async(req, res) => {
    const foodInput =req.body;
  const prompt = `Provide the nutritional values for ${foodInput} including calories, protein, carbs, fats, and other key nutrients in a structured format.`
  if (!process.env.OPEN_AI_KEY) {
     
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
app.post("/contactus", async(req, res) => {

  
    const {name, email, message, phone} = req.body;
    if ([name, email, message, phone].some((field) => !field)) {
      return res.status(400).json({ message: "All fields are required." });
    }
    sendEmail(name, email, message, phone)
    return res.status(200).json({ message: "Message sent successfully." });
})
app.use((req, res, next) => {
  console.log(`Unhandled request: ${req.method} ${req.originalUrl}`);
  res.status(404).send("Route not found");
});

export default app;
