import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/hasFormatter";

// const inv = new Invoice("mtk", "working with mfs", 500);
// const pay = new Payment("st", "working with mfs", 400);
// console.log(inv, pay);
// console.log(inv.format(), pay.format());

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("mtk", "working with mfs", 500);
// docTwo = new Payment("st", "working with mfs", 400);

// // const docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// docs.push(inv);
// docs.push(pay);
// console.log(docs);
// console.log(docOne.format(), docTwo.format());

// let invoices: HasFormatter[] = []; // can only push things that are inside of Invoice class because Invoice[] type
// invoices.push(inv, pay);

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

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
  }

  if (type.value === "payment") {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
  }

  toFrom.value = details.value = amount.value = "";
});
