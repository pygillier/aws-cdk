/**
 * SqliMatchStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html
 */

import { FieldToMatch } from './fieldtomatch';
import { TextTransformation } from './texttransformation';

export interface SqliMatchStatement {
  readonly fieldToMatch: FieldToMatch;
  readonly sensivityLevel: SensivityLevel;
  readonly textTransformations: TextTransformation[];
}

/** Enums */
export enum SensivityLevel {
  HIGH = 'HIGH',
  LOW = 'LOW',
}