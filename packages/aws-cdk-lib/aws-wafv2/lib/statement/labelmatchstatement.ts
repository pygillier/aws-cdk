/**
 * LabelMatchStatement
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html
 */

export interface LabelMatchStatement {
  readonly key: string;
  readonly scope: string;
}

export enum Scope {
  LABEL = 'LABLE',
  NAMESPACE = 'NAMESPACE',
}