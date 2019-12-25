export class Payment {
  id: string;
  amount: number;
  currencyCode: string;
  sourceAccountNumber: number;
  destinationAccountNumber: number;
  paymentDescription: string;

  constructor();
  constructor(
    id: string,
    amount: number,
    currencyCode: string,
    sourceAccountNumber: number,
    destinationAccountNumber: number,
    paymentDescription: string
  );
  constructor(
    id?: string,
    amount?: number,
    currencyCode?: string,
    sourceAccountNumber?: number,
    destinationAccountNumber?: number,
    paymentDescription?: string
  ) {
    this.id = id;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.sourceAccountNumber = sourceAccountNumber;
    this.destinationAccountNumber = destinationAccountNumber;
    this.paymentDescription = paymentDescription;
  }
}
