import CreateAccount from "../../application/use_cases/CreateAccount.js";
import DeleteAccount from "../../application/use_cases/DeleteAccount.js";
import GetAccount from "../../application/use_cases/GetAccount.js";
import GetAccountById from "../../application/use_cases/GetAccountById.js";
import UpdateAccountConsignarUseCase from "../../application/use_cases/UpdateAccountConsignar.js";
import UpdateAccountRetirarUseCase from "../../application/use_cases/UpdateAccountRetirar.js";

import AccountRepositoryMongo from "../repositories/AccountRepositoryMongo.js";
const accountRepository = new AccountRepositoryMongo();

export const createAccount = async (req, res) => {
  try {
    const useCase = new CreateAccount(accountRepository);
    const account = await useCase.execute(req.body);
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const GetAccounts = async (req, res) => {
  try {
    const useCase = new GetAccount(accountRepository);
    const accounts = await useCase.execute();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const useCase = new GetAccountById(accountRepository);
    const account = await useCase.execute(req.params.id);
    if (!account) return res.status(404).json({ message: "Account not found" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateAccountConsignar = async (req, res) => {
  try {
    const useCase = new UpdateAccountConsignarUseCase(accountRepository);
    const account = await useCase.execute(req.params.id, req.body);
    if (!account) return res.status(404).json({ message: "Account not found" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAccountRetirar = async (req, res) => {
  try {
    const useCase = new UpdateAccountRetirarUseCase(accountRepository);
    const account = await useCase.execute(req.params.id, req.body);
    if (!account) return res.status(404).json({ message: "Account not found" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const useCase = new DeleteAccount(accountRepository);
    const result = await useCase.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Account not found" });
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
