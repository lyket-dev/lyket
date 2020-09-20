export class ApiError extends Error {
  requestInfo: RequestInfo;
  requestInit: RequestInit;
  response: Response;

  constructor(
    requestInfo: RequestInfo,
    requestInit: RequestInit,
    response: Response
  ) {
    super(
      `Failed API request to ${requestInfo} with status ${response.status}`
    );

    this.requestInfo = requestInfo;
    this.requestInit = requestInit;
    this.response = response;
  }
}
