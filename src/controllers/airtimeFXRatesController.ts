/**
 * reloadly-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { string, unknown } from '../schema';
import { BaseController } from './baseController';

export class AirtimeFXRatesController extends BaseController {
  /**
   * @param accept        Example: application/com.reloadly.topups-v1+json
   * @param authorization
   * @param body          Payload description
   * @return Response from the API call
   */
  async reloadlyAirtimeFxRates(
    accept: string,
    authorization: string,
    body: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/operators/fx-rate');
    req.baseUrl('Airtime');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      authorization: [authorization, string()],
      body: [body, unknown()],
    });
    req.header('Accept', mapped.accept);
    req.header('Authorization', mapped.authorization);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(401, ApiError, 'Full authentication is required to access this resource');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(500, ApiError, 'Fx rate is currently not available for this operator, please try again later or contact support.');
    req.authenticate(false);
    return req.callAsJson(unknown(), requestOptions);
  }
}
