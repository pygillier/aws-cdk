/**
 * The scope of the WebACL.
 */
export enum Scope {
  CLOUDFRONT = 'CLOUDFRONT',
  REGIONAL = 'REGIONAL',
}

export enum IPAddressVersion {
  IPV4 = 'IPV4',
  IPV6 = 'IPV6',
}

export enum ContentType {
  PLAIN = 'TEXT_PLAIN',
  HTML = 'TEXT_HTML',
  JSON = 'APPLICATION_JSON',
}
