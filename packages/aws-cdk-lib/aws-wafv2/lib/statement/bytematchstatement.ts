import { FieldToMatch } from './fieldtomatch';
import { TextTransformation } from './texttransformation';

/**
 * ByteMatchStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html
 */
export interface ByteMatchStatement {
  readonly fieldToMatch: FieldToMatch;
  readonly positionalConstraint: PositionalConstraint;
  readonly searchString?: string;
  readonly searchString64?: string;
  readonly textTransformations: TextTransformation[];
}

/** Enums */
export enum PositionalConstraint {
  EXACTLY = 'EXACTLY',
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH',
  CONTAINS = 'CONTAINS',
  CONTAINS_WORD = 'CONTAINS_WORD',
}
