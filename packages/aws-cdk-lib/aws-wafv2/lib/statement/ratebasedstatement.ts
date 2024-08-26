/**
 * RateBasedStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html
 */

import { ForwardedIPConfiguration } from './enums';
import { Statement } from './statement';
import { TextTransformation } from './texttransformation';

export interface RateBasedStatement {
  readonly aggregateKeyType: AggregateKeyType;
  readonly customKeys?: RateBasedStatementCustomKey[];

  /**
   * Evaluation window in seconds.
   *
   * @default 300
   */
  readonly evaluationWindowSec?: EvaluationWindowSec;
  readonly forwardedIpConfig?: ForwardedIPConfiguration;
  readonly limit: number;
  readonly scopeDownStatement?: Statement;
}

export interface RateBasedStatementCustomKey {
  readonly cookie?: RateLimitCookie;
  readonly forwardedIP?: {};
  readonly header?: RateLimitHeader;
  readonly httpMethod?: {};
  readonly ip?: {};
  readonly labelNamespace?: RateLimitLabelNamespace;
  readonly queryArgument?: RateLimitQueryArgument;
  readonly queryString?: RateLimitQueryString;
  readonly uriPath?: RateLimitUriPath;
}

export interface RateLimitCookie {
  readonly name: string;
  readonly textTransformation: TextTransformation[];
}

export interface RateLimitHeader {
  readonly name: string;
  readonly textTransformation: TextTransformation[];
}

export interface RateLimitLabelNamespace {
  readonly namespace: string;
}

export interface RateLimitQueryArgument {
  readonly name: string;
  readonly textTransformation: TextTransformation[];
}

export interface RateLimitQueryString {
  readonly textTransformation: TextTransformation[];
}

export interface RateLimitUriPath {
  readonly textTransformation: TextTransformation[];
}

/** Enums */
export enum AggregateKeyType {
  CONSTANT = 'CONSTANT',
  CUSTOM_KEYS = 'CUSTOM_KEYS',
  FORWARDED_IP = 'FORWARDED_IP',
  IP = 'IP',
}
export enum EvaluationWindowSec {
  ONE_MINUTE = 60,
  TWO_MINUTES = 120,
  FIVE_MINUTES = 300,
  TEN_MINUTES = 600,
}