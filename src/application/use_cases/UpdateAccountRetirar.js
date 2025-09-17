export default class UpdateAccountRetirar {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(id, accountData) {
    const account = await this.accountRepository.findById(id);
    if (!account) return null;

    
    if (account.saldo < accountData.saldo) {
      throw new Error("Saldo insuficiente");
    }

    
    account.saldo -= accountData.saldo;

    
    account.totalTransacciones += 1;

    return await account.save();
  }
}
