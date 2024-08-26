/**
 * IPSetReferenceStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html
 */

import { FallbackBehavior } from './enums';

export interface IPSetReferenceStatement {
  readonly arn: string;
  readonly ipSetForwardedIpConfig?: IPSetForwardedIpConfiguration;
}

export interface IPSetForwardedIpConfiguration {
  readonly headerName: string;
  readonly fallbackBehavior: FallbackBehavior;
  readonly position: Position;
}

/** Enums */
export enum Position {
  FIRST = 'FIRST',
  LAST = 'LAST',
  ANY = 'ANY',
}