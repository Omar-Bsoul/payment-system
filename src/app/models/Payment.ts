export class Payment {
  id: string;
  amount: number;
  currencyCode: string;
  destinationAccountNumber: number;
  sourceAccountNumber: number;
  paymentDescription: string;

  constructor();
  constructor(
    id: string,
    amount: number,
    currencyCode: string,
    destinationAccountNumber: number,
    sourceAccountNumber: number,
    paymentDescription: string
  );
  constructor(
    id?,
    amount?,
    currencyCode?,
    destinationAccountNumber?,
    sourceAccountNumber?,
    paymentDescription?
  ) {
    this.id = id;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.destinationAccountNumber = destinationAccountNumber;
    this.sourceAccountNumber = sourceAccountNumber;
    this.paymentDescription = paymentDescription;
  }
}
