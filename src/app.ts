let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'zzbtang';

// if문이 없으면 에러
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { msg: message, errorCode: code };
}

generateError('An error occurred', 500);
