import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/listTemplates.js";
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
const anchor = document.querySelector("a");
console.log(anchor.href);
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
let doc;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    if (type.value === "payment") {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
    toFrom.value = details.value = amount.value = "";
});
