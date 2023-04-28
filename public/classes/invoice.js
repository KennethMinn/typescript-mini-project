export class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = client;
        // this.details = details;
        // this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
        // console.log(`${this.client} owes ${this.amount} for ${this.details}`);
    }
}
