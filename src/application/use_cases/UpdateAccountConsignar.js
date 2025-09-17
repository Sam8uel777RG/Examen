export default class UpdateAccountConsignar {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(id, accountData) {
    const account = await this.accountRepository.findById(id);
    if (!account) return null;

    
    account.saldo += accountData.saldo;

    
    account.totalTransacciones += 1;

    return await account.save();
  }
}
