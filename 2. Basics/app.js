var userInput;
var userName;
userInput = 5;
userInput = "Mash";
userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occurred!", 500);
