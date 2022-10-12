/**
 * reloadly-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ReloadlyAuthRequest {
  clientId: string;
  clientSecret: string;
  grantType: string;
  audience: string;
}

export const reloadlyAuthRequestSchema: Schema<ReloadlyAuthRequest> = object({
  clientId: ['client_id', string()],
  clientSecret: ['client_secret', string()],
  grantType: ['grant_type', string()],
  audience: ['audience', string()],
});
