import { Router } from "express";
import { createAccount, deleteAccount, getAccountById, GetAccounts,  updateAccountConsignar,  updateAccountRetirar } from "../controllers/accountController.js";

const router = Router();

router.post("/", createAccount);
router.get("/", GetAccounts);
router.get("/:id", getAccountById);
router.put("/:id/consignar", updateAccountConsignar);
router.put("/:id/retirar", updateAccountRetirar);
router.delete("/:id", deleteAccount);

export default router;
