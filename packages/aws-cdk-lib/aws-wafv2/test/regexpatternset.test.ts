/**
 * RegexPatternSet tests
 */
import { Template } from '../../assertions';
import * as cdk from '../../core';
import * as wafv2 from '../lib';

describe('RegexPatternSet', () => {
  test('basic object', () => {
    const stack = new cdk.Stack();

    new wafv2.RegexPatternSet(stack, 'RegexPatternSet', {
      scope: wafv2.Scope.REGIONAL,
      name: 'MyRegexPatternSet',
      regularExpressionList: [
        'regex1',
        'regex2',
      ],
    });

    Template.fromStack(stack).resourceCountIs('AWS::WAFv2::RegexPatternSet', 1);
  });
});