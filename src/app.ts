class Department {
  // private readonly id: string;
  // public name: string;
  // employees가 클래스로 생성된 객체 내부에서만 접근할 수 있는 속성이 됨
  private employees: string[] = [];

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

class ITDepartment extends Department {}

const accounting = new Department('d1', 'Accounting');

accounting.describe();

accounting.addEmployee('tang');
accounting.addEmployee('zzb');

// 외부에서 변경 가능, 좋지 않다.
// accounting.employees[2] = 'Anna';

accounting.printEmployeeInformation();
// console.log('a', accounting.describe());
// const accountingCopy = { name: 'dummy', describe: accounting.describe };
// console.log(accountingCopy);
// accountingCopy.describe();

// console.log(accounting);
