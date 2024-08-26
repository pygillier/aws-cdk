/**
 * XssMatchStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html
 */

import { FieldToMatch } from './fieldtomatch';
import { TextTransformation } from './texttransformation';

export interface XssMatchStatement {
  readonly fieldToMatch: FieldToMatch;
  readonly textTransformations: TextTransformation[];
}
