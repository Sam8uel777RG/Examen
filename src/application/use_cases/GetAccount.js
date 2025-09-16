export default class GetAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute() {
    return await this.accountRepository.findAll();
  }
}
