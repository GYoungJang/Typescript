// 객체 생성 x, 타입 정의
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'tang',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable1 = string | number;
type Numeric = boolean | number;

type Universal = Combinable1 & Numeric;

function add3(a: Combinable1, b: Combinable1) {
  // if문이 타입가드
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name : ' + emp.name);
}
