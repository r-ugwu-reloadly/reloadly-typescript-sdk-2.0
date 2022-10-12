# Airtime-FX Rates

```ts
const airtimeFXRatesController = new AirtimeFXRatesController(client);
```

## Class Name

`AirtimeFXRatesController`


# Reloadly-Airtime-Fx-Rates

```ts
async reloadlyAirtimeFxRates(
  accept: string,
  authorization: string,
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `body` | `unknown` | Body, Required | Payload description |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const contentType = null;
const body = '{"operatorId":"1","amount":"1"}';
try {
  const { result, ...httpResponse } = await airtimeFXRatesController.reloadlyAirtimeFxRates(accept, authorization, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "id": 174,
  "name": "Natcom Haiti",
  "fxRate": 465,
  "currencyCode": "HTG"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |
| 500 | Fx rate is currently not available for this operator, please try again later or contact support. | `ApiError` |

