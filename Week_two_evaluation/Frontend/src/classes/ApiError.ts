
const errorMap : Record<number,string> = {
    400 : "Invalid city !, Please enter valid city",
    404 : "Invalid city !, Please enter valid city",
    401 : "Invalid api key",
    429 : "Api fetching quota reached, try after 24 hours",
    500 : "Internal error",
}

class ApiError extends Error {
  code: number;

  constructor(code: number) {
    const message = errorMap[code] ?? "Something went wrong";
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static getError(code: number): string {
    return errorMap[code] ?? "Something went wrong";
  }
}


export default ApiError;