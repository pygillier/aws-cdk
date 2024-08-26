export interface RuleAction {
  readonly allow?: AllowAction;
  readonly block?: BlockAction;
  readonly captcha?: CaptchaAction;
  readonly challenge?: ChallengeAction;
  readonly count?: CountAction;
}

export interface ActionBase {
  readonly customRequestHandling?: CustomRequestHandling;
}

export interface AllowAction extends ActionBase {}
export interface CaptchaAction extends ActionBase {}
export interface ChallengeAction extends ActionBase {}
export interface CountAction extends ActionBase {}

export interface BlockAction {
  readonly customResponse?: CustomResponse;
}

/** Request / Response */
export interface CustomResponse {
  readonly customResponseBodyKey?: string;
  readonly responseCode: number;
  readonly responseHeaders?: CustomHTTPHeader[];
}

export interface CustomHTTPHeader {
  readonly name: string;
  readonly value: string;
}

export interface CustomRequestHandling {
  readonly insertHeaders: CustomHTTPHeader[];
}