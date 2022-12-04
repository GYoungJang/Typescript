abstract class Department {
  // private readonly id: string;
  // public name: string;
  // employees가 클래스 내부에서만 접근할 수 있는 속성이 됨
  protected employees: string[] = [];

  // 생성자에 한꺼번에 적어주면 코드의 양을 줄일 수 있음
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // 클래스 내에서 정적 속성이나 메서드를 사용하려면 this가 아닌 클래스 이름으로 접근
    console.log(Department.fiscalYear);
  }
  // 정적 속성
  static fiscalYear = 2022;

  // 정적 메서드 - 인스턴스화 하지 않고 접근할 수 있는..
  static createEmployee(name: string) {
    console.log(this.fiscalYear);
    return { name: name };
  }

  // 추상 클래스
  abstract describe(this: Department): void;
  // {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// new 키워드 없이 직접 클래스에서 호출...
const employee1 = Department.createEmployee('tang');
console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // this 접근 제어자를 사용하기 전에 무조건 super부터 호출..
    super(id, 'IT');
    this.admins = admins;
  }

  // 추상 클래스 이용
  describe() {
    console.log(`IT Department ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  // 클래스 내에서만 접근할 수 있는 클래스 자체의 정적 속성, 저장되는 값은 AccountingDepartment 타입 즉, 클래스 자체
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      // 반환하여 캡슐화..
      return this.lastReport;
    }
    throw new Error('보고서를 찾을 수 없음');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('값을 입력해주세여');
    }
    this.addReport(value);
  }

  // 싱글턴 - 하나의 클래스 하나의 인스턴스
  private constructor(id: string, private reports: string[]) {
    // this 접근 제어자를 사용하기 전에 무조건 super부터 호출..
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  // 메서드 오버라이딩
  describe() {
    console.log('Accounting Edpartment ID: ', this.id);
  }
  addEmployee(name: string) {
    if (name === 'zzb') return;
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

// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstance();

const IT = new ITDepartment('d2', ['zzb']);

accounting.addReport('error');
// getter는 속성으로 접근해야함... 그런데 위에 있는 get mostRecentReport 메서드가 실행됨...
console.log(accounting.mostRecentReport);
// setter도 속성으로 접근해야..
accounting.mostRecentReport = 'zzbtang';
accounting.printReports();

accounting.describe();

accounting.addEmployee('zzb');
accounting.addEmployee('tang');

// 외부에서 변경 가능, 좋지 않다.
// accounting.employees[2] = 'Anna';

accounting.printEmployeeInformation();
// console.log('a', accounting.describe());
// const accountingCopy = { name: 'dummy', describe: accounting.describe };
// console.log(accountingCopy);
// accountingCopy.describe();

// console.log(accounting);

IT.describe();

IT.addEmployee('1234');
IT.addEmployee('567');
IT.printEmployeeInformation();
console.log(IT);
