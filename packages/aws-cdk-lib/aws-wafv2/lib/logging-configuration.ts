import { Construct } from 'constructs';
import { CfnLoggingConfiguration } from './wafv2.generated';
import { Arn, IResource, Resource } from '../../core';

export interface ILoggingConfiguration extends IResource {

  readonly loggingConfigurationArn: string;
}

export interface LoggingConfigurationAttributes {
  readonly logDestinationConfigs: string[];
  readonly loggingFilter?: LoggingFilter;
  readonly redactedFields?: FieldToMatch[];
  readonly resourceArn: Arn;
}

export class LoggingConfiguration extends Resource implements ILoggingConfiguration {

  public readonly loggingConfigurationArn: string;

  constructor(scope: Construct, id: string, props: LoggingConfigurationAttributes) {
    super(scope, id, {
      physicalName: 'logging-configuration-'+id,
    });

    const resource = new CfnLoggingConfiguration(this, 'Resource', {
      logDestinationConfigs: props.logDestinationConfigs,
      loggingFilter: props.loggingFilter,
      redactedFields: props.redactedFields,
      resourceArn: props.resourceArn.toString(),
    });

    this.loggingConfigurationArn = this.getResourceArnAttribute(resource.ref, {
      service: 'wafv2',
      resource: this.physicalName,
    });
  }
}

export interface FieldToMatch {
  readonly method: {};
  readonly queryString: {};
  readonly singleHeader: SingleHeader;
  readonly uriPath: {};
}

export interface SingleHeader {
  readonly name: string;
}

export interface LoggingFilter {
  readonly defaultBehavior: Behavior;
  readonly filters: Filter[];
}

export interface Filter {
  readonly behavior: Behavior;
  readonly conditions: Condition[];
  readonly requirement: Requirement;
}

export interface Condition {
  readonly actionCondition: ActionCondition;
  readonly labelNameCondition: LabelNameCondition;
}

export interface LabelNameCondition {
  readonly labelName: string;
}

export enum Behavior {
  KEEP = 'KEEP',
  DROP = 'DROP',
}

export enum Requirement {
  MEETS_ANY = 'MEETS_ANY',
  MEETS_ALL = 'MEETS_ALL',
}

export enum ActionCondition {
  ALLOW = 'ALLOW',
  BLOCK = 'BLOCK',
  COUNT = 'COUNT',
  CAPTCHA = 'CAPTCHA',
  CHALLENGE = 'CHALLENGE',
  EXCLUDED_AS_COUNT = 'EXCLUDED_AS_COUNT',
}