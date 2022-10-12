# Airtime-Transactions

```ts
const airtimeTransactionsController = new AirtimeTransactionsController(client);
```

## Class Name

`AirtimeTransactionsController`

## Methods

* [Reloadly-Airtime-Transactions](../../doc/controllers/airtime-transactions.md#reloadly-airtime-transactions)
* [Reloadly-Airtime-Transaction-by-Id](../../doc/controllers/airtime-transactions.md#reloadly-airtime-transaction-by-id)


# Reloadly-Airtime-Transactions

```ts
async reloadlyAirtimeTransactions(
  accept: string,
  authorization: string,
  size?: number,
  page?: number,
  countrycode?: number,
  operatorid?: string,
  operatorName?: string,
  customIdentifier?: string,
  startDate?: string,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `size` | `number \| undefined` | Query, Optional | This indicates the number of transactions to be retrieved on a page. Default value is 200. |
| `page` | `number \| undefined` | Query, Optional | This indicates the page of the transactions list being retrieved. Default value is 1. |
| `countrycode` | `number \| undefined` | Query, Optional | Indicates the ISO code of the country assigned to the top-up's receiver at the time the top-up transaction was made. |
| `operatorid` | `string \| undefined` | Query, Optional | Indicates the operator identification number assigned to the top-up transaction at the time it was made. |
| `operatorName` | `string \| undefined` | Query, Optional | Indicates the operator name assigned to the top-up transaction at the time it was made. |
| `customIdentifier` | `string \| undefined` | Query, Optional | Indicates the unique reference assigned to the top-up transaction at the time it was made. |
| `startDate` | `string \| undefined` | Query, Optional | Indicates the beginning of the timeframe range for the transactions to be retrieved. |
| `endDate` | `string \| undefined` | Query, Optional | String  Indicates the end of the timeframe range for the transactions to be retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const size = 10;
const page = 1;
const operatorid = '341';
const operatorName = 'MTN Nigeria';
const customIdentifier = 'april-top-up';
const startDate = '2021-04-30 00:00:00';
const endDate = '2021-07-30 00:00:00';
try {
  const { result, ...httpResponse } = await airtimeTransactionsController.reloadlyAirtimeTransactions(accept, authorization, size, page, None, operatorid, operatorName, customIdentifier, startDate, endDate);
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
  "content": [
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
      "balanceInfo": null
    },
    {},
    {}
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |


# Reloadly-Airtime-Transaction-by-Id

```ts
async reloadlyAirtimeTransactionById(
  accept: string,
  authorization: string,
  transactionid: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `transactionid` | `number` | Template, Required | This indicates the identification number of the transaction to be retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const transactionid = 101;
try {
  const { result, ...httpResponse } = await airtimeTransactionsController.reloadlyAirtimeTransactionById(accept, authorization, transactionid);
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
  "balanceInfo": null
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Airtime transaction not found | `ApiError` |

