export default class UpdateAccountRetirar {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id, accountData) {
    return await this.accountRepository.update(id, accountData);
  }
}

if (UpdateAccountRetirar < accountData.saldo) {
    console.log ("el Retiro fue hecho con exito")
    Account.saldo -= accountData.saldo;
}else {
    console.log ("El Retiro no se pudo realizar")
}