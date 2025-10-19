import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`http://localhost:${port}`);
  });
