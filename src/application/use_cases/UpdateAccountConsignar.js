export default class UpdateAccountConsignar {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id, accountData) {
    return await this.accountRepository.update(id, accountData);
  }
}

if (UpdateAccount > 0) {
    console.log ("La consigna fue hecha con exito")
}else {
    console.log ("La consigna no se pudo realizar")
}