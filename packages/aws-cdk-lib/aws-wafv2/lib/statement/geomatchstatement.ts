/**
 * GeoMatch Statement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html
 */

import { ForwardedIPConfiguration } from './enums';

export interface GeoMatchStatement {
  /**
   * The two-character country code for the countries to match.
   */
  readonly countryCodes?: string[];
  readonly forwardedIpConfig?: ForwardedIPConfiguration;
}
