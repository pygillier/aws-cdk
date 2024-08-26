/**
 * RegexPatternSetReferenceStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html
 */

import { FieldToMatch } from './fieldtomatch';
import { TextTransformation } from './texttransformation';

export interface RegexPatternSetReferenceStatement {
  readonly arn: string;
  readonly fieldToMatch: FieldToMatch;
  readonly textTransformations: TextTransformation[];
}