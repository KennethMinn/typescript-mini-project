import { HasFormatter } from "../interfaces/hasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.textContent = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.textContent = item.format();
    li.append(p);

    if (pos === "start") this.container.prepend(li);
    this.container.append(li);
  }
}
