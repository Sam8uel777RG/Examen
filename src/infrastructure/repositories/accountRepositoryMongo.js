
import mongoose from "mongoose";



const AccountModel = mongoose.model("Account", AccountSchema);

class AccountRepositoryMongo {
  async create(data) { return await new AccountModel(data).save(); }
  async findAll() { return await AccountModel.find(); }
  async findById(id) { return await AccountModel.findById(id); }
  async update(id, data) { return await AccountModel.findByIdAndUpdate(id, data, { new: true }); }
  async delete(id) { return await AccountModel.findByIdAndDelete(id); }
}

export default AccountRepositoryMongo;
