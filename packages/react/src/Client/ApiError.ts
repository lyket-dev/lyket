export class ApiError extends Error {
  requestInfo: RequestInfo;
  requestInit: RequestInit;
  status: Response['status'];
  errors: [Response];

  constructor(requestInfo, requestInit, status, errors) {
    super(`Failed API request to ${requestInfo} with status ${status}`);

    this.requestInfo = requestInfo;
    this.requestInit = requestInit;
    this.status = status;
    this.errors = errors;
  }
}
