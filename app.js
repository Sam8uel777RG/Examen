import "dotenv/config.js";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/database.js";
import AccountRoutes from "./src/infrastructure/routes/AccountRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use("/api/accounts", AccountRoutes);

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  );
});
