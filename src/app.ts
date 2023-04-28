import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("mtk", "working with mfs", 500);
const invTwo = new Invoice("st", "working with mfs", 400);
console.log(invOne, invTwo);
console.log(invOne.method(), invTwo.method());

let invoices: Invoice[] = []; // can only push things that are inside of Invoice class because Invoice[] type
invoices.push(invOne, invTwo);

const anchor = document.querySelector("a")!;
console.log(anchor.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  type.value = toFrom.value = details.value = amount.value = "";
});
