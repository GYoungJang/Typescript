// 객체 생성 x, 타입 정의
type Admin = {
  name: string;
  privileges: string[];
};

type employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & employee;

const e1: ElevatedEmployee = {
  name: "zzb",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable1 = string | number
type Numeric = boolean | number

type Universal = Combinable1 & Numeric;