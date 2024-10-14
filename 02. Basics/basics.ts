function add(num1: number, num2: number, res: boolean, phrase: string) {
  //   console.log(typeof num1);
  //   if (typeof num1 !== "number" || typeof num2 !== "number") {
  //     throw new Error("Incorrect Input!");
  //   }

  const result = num1 + num2;
  if (res) {
    console.log(phrase + result);
  } else {
    return num1 + num2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resPhrase = "Result is: "

add(number1, number2, printResult, resPhrase);
