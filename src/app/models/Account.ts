export class Account {
  id: string;
  accountNumber: number;
  accountHolderName: string;
  accountHolderPhoneNumber: string;
  accountDescription: string;

  constructor();
  constructor(
    id: string,
    accountNumber: number,
    accountHolderName: string,
    accountHolderPhoneNumber: string,
    accountDescription: string
  );
  constructor(
    id?,
    accountNumber?,
    accountHolderName?,
    accountHolderPhoneNumber?,
    accountDescription?
  ) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountHolderPhoneNumber = accountHolderPhoneNumber;
    this.accountDescription = accountDescription;
  }
}
