function add1(n1: number, n2: number) {
  return n1 + n2;
}

function printResult1(num: number) {
  console.log('Result : ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult1(add1(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add1;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});
