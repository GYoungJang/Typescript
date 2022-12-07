interface Developer {
  name: string;
  getName(): string;
}

class Developer1 implements Developer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

let dev1 = new Developer1("새싹");
dev1.name = "SeSac";
console.log(dev1.getName());
