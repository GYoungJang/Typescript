// const person:{
//     name:string;
//     age:number;
// }= {
// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// } = {
//     name: "zzbtang",
//     age: 30,
//     hobbies:['Sports', 'Cooking'],
//     role:[2, 'author']
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN='admin', READ_ONLY=100, AUTHOR};

const person = {
    name: "zzbtang",
    age: 30,
    hobbies:['Sports', 'Cooking'],
    role: Role.ADMIN,
}

// person.role.push(1);
// person.role[1] = 1;
// person.role = [0, 'admin', 'user'];

console.log(person.role)

let favoriteActivities:string[];
favoriteActivities = ['Sports'];

console.log(person);
console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log("is author");
}