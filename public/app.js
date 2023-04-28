"use strict";
class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    method() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
        // console.log(`${this.client} owes ${this.amount} for ${this.details}`);
    }
}
const invOne = new Invoice("mtk", "working with mfs", 500);
const invTwo = new Invoice("st", "working with mfs", 400);
console.log(invOne, invTwo);
console.log(invOne.method(), invTwo.method());
let invoices = []; // can only push things that are inside of Invoice class because Invoice[] type
invoices.push(invOne, invTwo);
const anchor = document.querySelector("a");
console.log(anchor.href);
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    type.value = toFrom.value = details.value = amount.value = "";
});
