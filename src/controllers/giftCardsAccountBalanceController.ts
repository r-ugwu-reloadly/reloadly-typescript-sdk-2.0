/**
 * reloadly-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { string, unknown } from '../schema';
import { BaseController } from './baseController';

export class GiftCardsAccountBalanceController extends BaseController {
  /**
   * @param accept
   * @param authorization
   * @return Response from the API call
   */
  async reloadlyGiftCardsAccountBalance(
    accept: string,
    authorization: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/accounts/balance');
    req.baseUrl('Gift Cards');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      authorization: [authorization, string()],
    });
    req.header('Accept', mapped.accept);
    req.header('Authorization', mapped.authorization);
    req.throwOn(401, ApiError, 'Full authentication is required to access this resource');
    req.throwOn(404, ApiError, 'Not Found');
    req.authenticate(false);
    return req.callAsJson(unknown(), requestOptions);
  }
}
