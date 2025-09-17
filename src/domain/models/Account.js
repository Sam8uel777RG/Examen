import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  AccountNumber: { type: String, required: true, unique: true },
  clientename: { type: String, required: true },
  saldo: { type: Number, required: true, default: 0 },
  totalTransacciones: { type: Number, required: true, default: 0 }
});

export default mongoose.model("Account", AccountSchema);
