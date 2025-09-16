import Account from "../../domain/models/Account";

export default class UpdateAccountConsignar {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id, accountData) {
    return await this.accountRepository.update(id, accountData);
  }
}

if (UpdateAccountConsignar) {
    Account.saldo += accountData.saldo;
}else {
    console.log ("La consigna no se pudo realizar")
}