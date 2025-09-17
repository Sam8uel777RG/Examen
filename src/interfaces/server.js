import express from "express";
import AccountRoutes from "../routes/AccountRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/accounts", AccountRoutes);

export default app;