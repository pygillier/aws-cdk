/**
 * FieldToMatch
 */

import { FallbackBehavior } from './enums';

export interface FieldToMatch {
  readonly allQueryArguments?: {};
  readonly body?: Body;
  readonly cookies?: Cookies;
  readonly headers?: Headers;
  readonly ja3Fingerprint?: JA3Fingerprint;
  readonly jsonBody?: JsonBody;
  readonly method?: {};
  readonly queryString?: {};
  readonly singleHeader?: SingleHeader;
  readonly singleQueryArgument?: SingleQueryArgument;
  readonly uriPath?: {};
}

export interface Body {
  readonly oversizeHandling: OversizeHandling;
}

export interface Cookies {
  readonly matchPattern: CookieMatchPattern;
  readonly matchScope: MatchScope;
  readonly oversizeHandling: OversizeHandling;
}

export interface Headers {
  readonly matchPattern: HeaderMatchPattern;
  readonly matchScope: MatchScope;
  readonly oversizeHandling: OversizeHandling;
}

export interface SingleHeader {
  readonly name: string;
}

export interface SingleQueryArgument {
  readonly name: string;
}

export interface JA3Fingerprint {
  readonly fallbackBehavior: FallbackBehavior;
}

export interface JsonBody {
  readonly invalidFallbackBehavior?: InvalidFallbackBehavior;
  readonly matchPattern: JsonMatchPattern;
  readonly matchScope: MatchScope;
  readonly oversizeHandling: OversizeHandling;
}

/** MatchPatterns */
export interface MatchPatternBase {
  readonly all?: {};
  readonly excludedCookies?: string[];
  readonly includedCookies?: string[];
}

export interface CookieMatchPattern extends MatchPatternBase {}
export interface HeaderMatchPattern extends MatchPatternBase {}

export interface JsonMatchPattern {
  readonly all?: {};
  readonly includedPaths?: string[];
}

/** Enums */
export enum OversizeHandling {
  NONE = 'NONE',
  CONTINUE = 'CONTINUE',
  MATCH = 'MATCH',
  NO_MATCH = 'NO_MATCH',
}

export enum InvalidFallbackBehavior {
  EVALUATE_AS_STRING = 'EVALUATE_AS_STRING',
  MATCH = 'MATCH',
  NO_MATCH = 'NO_MATCH',
}

export enum MatchScope {
  ALL = 'ALL',
  KEY = 'KEY',
  VALUE = 'VALUE',
}