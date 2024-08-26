import { Statement } from './statement';

/** Flow statements (and/or/not) */
export interface FlowStatementBase {
  readonly statements: Statement[];
}
export interface AndStatement extends FlowStatementBase {}
export interface OrStatement extends FlowStatementBase {}

export interface NotStatement {
  readonly statement: Statement;
}