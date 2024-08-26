import { ByteMatchStatement } from './bytematchstatement';
import { AndStatement, NotStatement, OrStatement } from './flow';
import { GeoMatchStatement } from './geomatchstatement';
import { IPSetReferenceStatement } from './ipsetreferencestatement';
import { LabelMatchStatement } from './labelmatchstatement';
import { RateBasedStatement } from './ratebasedstatement';
import { RegexMatchStatement } from './regexmatchstatement';
import { RegexPatternSetReferenceStatement } from './regexpatternsetreferencestatement';
import { SizeConstraintStatement } from './sizeconstraintstatement';
import { SqliMatchStatement } from './sqlimatchstatement';
import { XssMatchStatement } from './xssmatchstatement';

export interface Statement {
  readonly andStatement?: AndStatement;
  readonly byteMatchStatement?: ByteMatchStatement;
  readonly geoMatchStatement?: GeoMatchStatement;
  readonly iPSetReferenceStatement?: IPSetReferenceStatement;
  readonly labelMatchStatement?: LabelMatchStatement;
  readonly notStatement?: NotStatement;
  readonly orStatement?: OrStatement;
  readonly rateBasedStatement?: RateBasedStatement;
  readonly regexMatchStatement?: RegexMatchStatement;
  readonly regexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
  readonly sizeConstraintStatement?: SizeConstraintStatement;
  readonly sqliMatchStatement?: SqliMatchStatement;
  readonly xssMatchStatement?: XssMatchStatement;
}