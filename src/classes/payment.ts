import { HasFormatter } from "../interfaces/hasFormatter";

export class Payment implements HasFormatter {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    public recipient: string,
    public details: string,
    readonly amount: number
  ) {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}.`;
    // console.log(`${this.client} owes ${this.amount} for ${this.details}`);
  }
}
