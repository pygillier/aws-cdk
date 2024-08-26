/**
 * SizeConstraintStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html
 */

import { FieldToMatch } from './fieldtomatch';
import { TextTransformation } from './texttransformation';

export interface SizeConstraintStatement {
  readonly comparisonOperator: ComparisonOperator;
  readonly fieldToMatch: FieldToMatch;
  readonly size: number;
  readonly textTransformations: TextTransformation[];
}

/** Enums */
export enum ComparisonOperator {
  EQ = 'EQ',
  NE = 'NE',
  LE = 'LE',
  LT = 'LT',
  GE = 'GE',
  GT = 'GT',
}
