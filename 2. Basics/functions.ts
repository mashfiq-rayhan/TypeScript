function add(n1: number, n2: number) {
  return n1 + n2;
}

function printRes(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printRes(add(5, 12));

let combinevalues: (a: number, b: number) => number;
combinevalues = add;
console.log(combinevalues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
