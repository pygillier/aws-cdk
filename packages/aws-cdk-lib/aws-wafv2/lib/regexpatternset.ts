/**
 * RegexPatternSet
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html
 */

import { Construct } from 'constructs';
import { Scope } from './enums';
import { CfnRegexPatternSet } from './wafv2.generated';
import { IResource, Resource } from '../../core';

export interface IRegexPatternSet extends IResource {
  readonly regexPatternSetArn: string;
}

export interface RegexPatternSetAttributes {
  readonly description?: string;
  readonly name?: string;
  readonly regularExpressionList: string[];
  readonly scope: Scope;
}

export class RegexPatternSet extends Resource implements IRegexPatternSet {
  public readonly regexPatternSetArn: string;

  constructor(scope: Construct, id: string, props: RegexPatternSetAttributes) {
    super(scope, id, {
      physicalName: props.name,
    });

    // Create the resource
    const regexPatternSet = new CfnRegexPatternSet(this, 'Resource', {
      description: props.description,
      name: props.name,
      regularExpressionList: props.regularExpressionList,
      scope: props.scope,
    });

    this.regexPatternSetArn = this.getResourceArnAttribute(regexPatternSet.ref, {
      service: 'wafv2',
      resource: this.physicalName,
    });
  }

}
