
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ' ' + input2.toString();
  }
  return result;
}

const combinedAges = combine(36, 20, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('36', '20', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("Mash", "Safa", 'as-text');
console.log(combinedNames);
