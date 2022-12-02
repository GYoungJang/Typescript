class Department {
  // private readonly id: string;
  // public name: string;
  // employees가 클래스 내부에서만 접근할 수 있는 속성이 됨
  protected employees: string[] = [];

  // 생성자에 한꺼번에 적어주면 코드의 양을 줄일 수 있음
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // this 접근 제어자를 사용하기 전에 무조건 super부터 호출..
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    // this 접근 제어자를 사용하기 전에 무조건 super부터 호출..
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  
  addEmployee(name: string) {
    if (name === "zzb") return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", []);

const IT = new ITDepartment("d2", ["zzb"]);

accounting.addReport("error");
accounting.printReports();

accounting.describe();

accounting.addEmployee("zzb");
accounting.addEmployee("tang");

// 외부에서 변경 가능, 좋지 않다.
// accounting.employees[2] = 'Anna';

accounting.printEmployeeInformation();
// console.log('a', accounting.describe());
// const accountingCopy = { name: 'dummy', describe: accounting.describe };
// console.log(accountingCopy);
// accountingCopy.describe();

// console.log(accounting);

IT.describe();

IT.addEmployee("1234");
IT.addEmployee("567");
IT.printEmployeeInformation();
console.log(IT);
