import { Template } from '../../assertions';
import * as cdk from '../../core';
import * as wafv2 from '../lib';

/* eslint-disable quote-props */
describe('IPSet', () => {
<<<<<<< HEAD
    
    /** WebACL */
    describe('IPSet tests', () => {
        test('all defaults', () => {
            const stack = new cdk.Stack();
            new wafv2.IPSet(stack, 'WebACL', {
              addresses: ['127.0.0.1/32'],
              ipAddressVersion: wafv2.IPAddressVersion.IPV4,
              scope: wafv2.Scope.CLOUDFRONT,
            });

            Template.fromStack(stack).resourceCountIs('AWS::WAFv2::IPSet', 1);

        });
=======
  describe('IPSet tests', () => {
    test('all defaults', () => {
      const stack = new cdk.Stack();
      new wafv2.IPSet(stack, 'IPSet', {
        addresses: ['127.0.0.1/32'],
        ipAddressVersion: wafv2.IPAddressVersion.IPV4,
        scope: wafv2.Scope.CLOUDFRONT,
      });

      Template.fromStack(stack).resourceCountIs('AWS::WAFv2::IPSet', 1);
>>>>>>> 37f6babdbd (fixup! IPSets)
    });
  });
});
