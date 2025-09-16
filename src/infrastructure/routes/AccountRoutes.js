import { Router } from "express";
import { createAccount, deleteAccount, getAccountById, GetAccounts, UpdateAccountConsignar, updateAccountRetirar } from "../controllers/AccountController";
const router = Router();

router.post("/", createAccount);
router.get("/", GetAccounts);
router.get("/:id", getAccountById);
router.put("/:id", UpdateAccountConsignar);
router.put("/:id", updateAccountRetirar);
router.delete("/:id", deleteAccount);

export default router;
