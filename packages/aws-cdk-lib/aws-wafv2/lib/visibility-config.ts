export interface VisibilityConfig {
  /**
   * Whether to enable related cloudwatch metrics
   * @default true
   */
  readonly cloudWatchMetricsEnabled: boolean;
  readonly metricName: string;
  readonly sampledRequestsEnabled: boolean;
}
