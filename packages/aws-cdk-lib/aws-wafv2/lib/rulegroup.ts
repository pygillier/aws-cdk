/**
 * RuleGroup
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html
 */
import { Construct } from 'constructs';
import { Scope } from './enums';
import { Label } from './label';
import { Rule } from './rule';
import { VisibilityConfig } from './visibility-config';
import { CfnRuleGroup } from './wafv2.generated';
import { ArnFormat, IResource, Lazy, Names, Resource } from '../../core';

const IS_RULEGROUP = Symbol.for('@aws-cdk/aws-wafv2.RuleGroup');

export interface IRuleGroup extends IResource {
  readonly ruleGroupArn: string;
}

export interface RuleGroupProps {
  readonly capacity: number;

  readonly availableLabels?: Label[];
  readonly consumedLabels?: Label[];

  readonly customResponseBodies?: {};

  readonly description?: string;
  readonly name?: string;

  readonly rules: Rule[];

  readonly scope: Scope;

  readonly visibilityConfig: VisibilityConfig;
}

export class RuleGroup extends Resource implements IRuleGroup {

  public static isRuleGroup(x: any): x is RuleGroup {
    return IS_RULEGROUP in x;
  }

  public readonly ruleGroupArn: string;
  public readonly ruleGroupName: string;

  constructor(scope: Construct, id: string, props: RuleGroupProps) {
    super(scope, id, {
      physicalName: props.name ||
                Lazy.string({ produce: () => this.generateName() }),
    });

    const resource = new CfnRuleGroup(scope, 'Resource', {
      capacity: props.capacity,
      name: this.physicalName,
      scope: props.scope,
      visibilityConfig: {
        ...props.visibilityConfig,
      },
    });

    this.ruleGroupArn = this.getResourceArnAttribute(resource.ref, {
      service: 'wafv2',
      resource: 'rulegroup',
      resourceName: this.physicalName,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });

    this.ruleGroupName = this.getResourceNameAttribute(resource.name!);

    Object.defineProperty(this, IS_RULEGROUP, { value: true });
  }

  private generateName(): string {
    const name = Names.uniqueId(this);
    if (name.length > 80) {
      return name.substring(0, 40) + name.substring(name.length - 40);
    }
    return name;
  }
}
