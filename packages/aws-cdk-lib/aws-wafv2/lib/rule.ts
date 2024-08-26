import { Label } from './label';
import { RuleAction } from './rule-action';
import { Statement } from './statement';
import { VisibilityConfig } from './visibility-config';

export interface Rule {
  readonly action?: RuleAction;
  readonly captchaConfig?: CaptchaConfig;
  readonly challengeConfig?: ChallengeConfig;
  readonly name: string;
  /**
   * The priority of the rule
   *
   * @default 0
   */
  readonly priority: number;
  readonly ruleLabels?: Label[];
  readonly statement: Statement;
  readonly visibilityConfig: VisibilityConfig;
}

/** Rule config */
export interface RuleConfigBase {
  readonly immunityTimeProperty?: ImmunityTimeProperty;
}

export interface ImmunityTimeProperty {
  immunityTime: number;
}

export interface CaptchaConfig extends RuleConfigBase {}
export interface ChallengeConfig extends RuleConfigBase {}