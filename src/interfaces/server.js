import express from "express";
import accountRoutes from "../routes/AccountRoutes.js";

const app = express();
app.use(express.json());ñ
app.use("/api/accounts", accountRoutes);

export default app;