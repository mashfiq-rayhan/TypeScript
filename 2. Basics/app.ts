let userInput: any;
let userName: string;

userInput = 5;
userInput = "Mash";
userName = userInput;

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An Error Occurred!", 500);