var userInput;
var userName;
userInput = 5;
userInput = 'zzbtang';
// if문이 없으면 에러
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { msg: message, errorCode: code };
}
generateError('An error occured', 500);
