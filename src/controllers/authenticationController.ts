/**
 * reloadly-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { string, unknown } from '../schema';
import { BaseController } from './baseController';

export class AuthenticationController extends BaseController {
  /**
   * @param contentType  Example: application/json
   * @param body         Request Payload
   * @return Response from the API call
   */
  async reloadlyAuth(
    contentType: string,
    body: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/token');
    req.baseUrl('Authentication');
    const mapped = req.prepareArgs({
      contentType: [contentType, string()],
      body: [body, unknown()],
    });
    req.header('Content-Type', mapped.contentType);
    req.json(mapped.body);
    req.throwOn(401, ApiError, 'Access Denied');
    req.authenticate(false);
    return req.callAsJson(unknown(), requestOptions);
  }
}
