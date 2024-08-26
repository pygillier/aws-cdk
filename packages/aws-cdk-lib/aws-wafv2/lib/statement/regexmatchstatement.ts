/**
 * RegexMatchStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html
 */

import { FieldToMatch } from './fieldtomatch';
import { TextTransformation } from './texttransformation';

export interface RegexMatchStatement {
  readonly fieldToMatch: FieldToMatch;
  readonly regexString: string;
  readonly textTransformations: TextTransformation[];
}