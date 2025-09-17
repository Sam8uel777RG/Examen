import AccountModel from "../../domain/models/Account.js";

export default class AccountRepositoryMongo {
  async create(accountData) {
    const account = new AccountModel(accountData);
    return await account.save();
  }

  async findAll() {
    return await AccountModel.find();
  }

  async findById(id) {
    return await AccountModel.findById(id);
  }

  async update(id, accountData) {
    return await AccountModel.findByIdAndUpdate(id, accountData, { new: true });
  }

  async delete(id) {
    return await AccountModel.findByIdAndDelete(id);
  }
}
