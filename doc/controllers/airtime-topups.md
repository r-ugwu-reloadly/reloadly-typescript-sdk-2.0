# Airtime-Topups

```ts
const airtimeTopupsController = new AirtimeTopupsController(client);
```

## Class Name

`AirtimeTopupsController`

## Methods

* [Reloadly-Airtime-Async-Topup](../../doc/controllers/airtime-topups.md#reloadly-airtime-async-topup)
* [Reloadly-Airtime-Topup](../../doc/controllers/airtime-topups.md#reloadly-airtime-topup)
* [Reloadly-Airtime-Topup-Status](../../doc/controllers/airtime-topups.md#reloadly-airtime-topup-status)


# Reloadly-Airtime-Async-Topup

```ts
async reloadlyAirtimeAsyncTopup(
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
| `body` | `unknown` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const contentType = null;
const body = '{"operatorId":"444","amount":"1","useLocalAmount":false,"customIdentifier":"This is example identifier","recipientPhone":{"countryCode":"ES","number":"657228901"},"senderPhone":{"countryCode":"CA","number":"1231231231"}}';
try {
  const { result, ...httpResponse } = await airtimeTopupsController.reloadlyAirtimeAsyncTopup(accept, authorization, body);
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
  "transactionId": 4602843
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Recipient phone number is not valid | `ApiError` |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |


# Reloadly-Airtime-Topup

```ts
async reloadlyAirtimeTopup(
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
| `body` | `unknown` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const contentType = null;
const body = '{"operatorId":"444","amount":"1","useLocalAmount":false,"customIdentifier":"This is example identifier","recipientPhone":{"countryCode":"ES","number":"657228901"},"senderPhone":{"countryCode":"CA","number":"1231231231"}}';
try {
  const { result, ...httpResponse } = await airtimeTopupsController.reloadlyAirtimeTopup(accept, authorization, body);
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
  "transactionId": 4602843,
  "status": "SUCCESSFUL",
  "operatorTransactionId": "7297929551:OrderConfirmed",
  "customIdentifier": "This is example identifier 130",
  "recipientPhone": 447951631337,
  "recipientEmail": null,
  "senderPhone": 11231231231,
  "countryCode": "GB",
  "operatorId": 535,
  "operatorName": "EE PIN England",
  "discount": 63.37,
  "discountCurrencyCode": "NGN",
  "requestedAmount": 3168.4,
  "requestedAmountCurrencyCode": "NGN",
  "deliveredAmount": 4.9985,
  "deliveredAmountCurrencyCode": "GBP",
  "transactionDate": "2021-12-06 08:13:39",
  "pinDetail": {
    "serial": 558111,
    "info1": "DIAL *611",
    "info2": "DIAL *611",
    "info3": "DIAL *611",
    "value": null,
    "code": 773709733097662,
    "ivr": "1-888-888-8888",
    "validity": "30 days"
  },
  "balanceInfo": {
    "oldBalance": 5109.53732,
    "newBalance": 2004.50532,
    "currencyCode": "NGN",
    "currencyName": "Nigerian Naira",
    "updatedAt": "2021-12-06 13:13:39"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Recipient phone number is not valid | `ApiError` |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |


# Reloadly-Airtime-Topup-Status

```ts
async reloadlyAirtimeTopupStatus(
  accept: string,
  authorization: string,
  transactionid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `transactionid` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const transactionid = 'transactionid8';
try {
  const { result, ...httpResponse } = await airtimeTopupsController.reloadlyAirtimeTopupStatus(accept, authorization, transactionid);
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
  "transactionId": 4602843,
  "status": "SUCCESSFUL",
  "operatorTransactionId": "7297929551:OrderConfirmed",
  "customIdentifier": "This is example identifier 130",
  "recipientPhone": 447951631337,
  "recipientEmail": null,
  "senderPhone": 11231231231,
  "countryCode": "GB",
  "operatorId": 535,
  "operatorName": "EE PIN England",
  "discount": 63.37,
  "discountCurrencyCode": "NGN",
  "requestedAmount": 3168.4,
  "requestedAmountCurrencyCode": "NGN",
  "deliveredAmount": 4.9985,
  "deliveredAmountCurrencyCode": "GBP",
  "transactionDate": "2021-12-06 08:13:39",
  "pinDetail": {
    "serial": 558111,
    "info1": "DIAL *611",
    "info2": "DIAL *611",
    "info3": "DIAL *611",
    "value": null,
    "code": 773709733097662,
    "ivr": "1-888-888-8888",
    "validity": "30 days"
  },
  "balanceInfo": {
    "oldBalance": 5109.53732,
    "newBalance": 2004.50532,
    "currencyCode": "NGN",
    "currencyName": "Nigerian Naira",
    "updatedAt": "2021-12-06 13:13:39"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |

