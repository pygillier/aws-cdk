/**
 * Statement specific enums
 */

export enum FallbackBehavior {
  MATCH = 'MATCH',
  NO_MATCH = 'NO_MATCH',
}

export interface ForwardedIPConfiguration {
  readonly headerName: string;
  readonly fallbackBehavior: FallbackBehavior;
}