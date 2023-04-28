export class Invoice {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    public client: string,
    public details: string,
    readonly amount: number
  ) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  method() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
    // console.log(`${this.client} owes ${this.amount} for ${this.details}`);
  }
}
