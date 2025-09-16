import "dotenv/config.js";
import connectDB from "./src/config/database.js";
import app from "./src/interfaces/server.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/Accounts", accountRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});
