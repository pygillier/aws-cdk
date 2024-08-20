import { Construct } from 'constructs';
import { IPAddressVersion, Scope } from './enums';
import { CfnIPSet } from './wafv2.generated';
import { IResource, Resource } from '../../core';

export interface IIPSet extends IResource {
  readonly ipsetArn: string;
}

export interface IPSetAttributes {
  readonly addresses: string[];
  readonly description?: string;
  readonly ipAddressVersion: IPAddressVersion;
  readonly name?: string;
  readonly scope: Scope;
}

export class IPSet extends Resource implements IIPSet {

  public readonly ipsetArn: string;
  public readonly ipsetId: string ;

  constructor(scope: Construct, id: string, props: IPSetAttributes) {
    super(scope, id, {
      physicalName: props.name,
    });

    // Create the resource
    const ipset = new CfnIPSet(this, 'Resource', {
      addresses: props.addresses,
      description: props.description,
      ipAddressVersion: props.ipAddressVersion,
      name: props.name,
      scope: props.scope,
    });

    this.ipsetArn = this.getResourceArnAttribute(ipset.ref, {
      service: 'wafv2',
      resource: this.physicalName,
    });
    this.ipsetId = this.getResourceNameAttribute(ipset.attrId);
  }
}