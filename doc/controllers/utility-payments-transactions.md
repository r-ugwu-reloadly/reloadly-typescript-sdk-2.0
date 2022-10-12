# Utility Payments-Transactions

```ts
const utilityPaymentsTransactionsController = new UtilityPaymentsTransactionsController(client);
```

## Class Name

`UtilityPaymentsTransactionsController`

## Methods

* [Reloadly-Utility-Payments-Transactions](../../doc/controllers/utility-payments-transactions.md#reloadly-utility-payments-transactions)
* [Reloadly-Utility-Payments-Transaction-by-Id](../../doc/controllers/utility-payments-transactions.md#reloadly-utility-payments-transaction-by-id)


# Reloadly-Utility-Payments-Transactions

```ts
async reloadlyUtilityPaymentsTransactions(
  accept: string,
  authorization: string,
  referenceId?: string,
  page?: number,
  size?: number,
  startDate?: string,
  endDate?: string,
  status?: string,
  serviceType?: string,
  billerType?: string,
  billerCountryCode?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `referenceId` | `string \| undefined` | Query, Optional | The reference ID you may have specified while placing the transaction. |
| `page` | `number \| undefined` | Query, Optional | The page to be retrieved from the transaction list. |
| `size` | `number \| undefined` | Query, Optional | Number of items to include in a single page. |
| `startDate` | `string \| undefined` | Query, Optional | Indicates the start date for the range of transactions to be retrieved. |
| `endDate` | `string \| undefined` | Query, Optional | Indicates the end date for the range of transactions to be retrieved. |
| `status` | `string \| undefined` | Query, Optional | The transaction's status. Can be either PROCESSING, SUCCESSFUL, FAILED, or REFUNDED. |
| `serviceType` | `string \| undefined` | Query, Optional | The biller's service type. Can be either PREPAID or POSTPAID. |
| `billerType` | `string \| undefined` | Query, Optional | The biller's type. Can be either ELECTRICITY_BILL_PAYMENT, WATER_BILL_PAYMENT, TV_BILL_PAYMENT, or INTERNET_BILL_PAYMENT |
| `billerCountryCode` | `string \| undefined` | Query, Optional | Indicates the ISO code of the country where the biller is located. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.utilities-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const referenceId = 'april-electricity-bill';
const page = 10;
const size = 1;
const startDate = '2021-06-01 00:00:00';
const endDate = '2022-06-01 10:00:00';
const status = 'PROCESSING';
const serviceType = 'PREPAID';
const billerType = 'ELECTRICITY_BILL_PAYMENT';
const billerCountryCode = 'NG';
try {
  const { result, ...httpResponse } = await utilityPaymentsTransactionsController.reloadlyUtilityPaymentsTransactions(accept, authorization, referenceId, page, size, startDate, endDate, status, serviceType, billerType, billerCountryCode);
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
[
  {
    "code": "PAYMENT_PROCESSED_SUCCESSFULLY",
    "message": "The payment was processed successfully",
    "transaction": {
      "id": 13,
      "status": "SUCCESSFUL",
      "referenceId": "april-electricity-bill",
      "amount": 1000,
      "amountCurrencyCode": "NGN",
      "deliveryAmount": 1000,
      "deliveryAmountCurrencyCode": "NGN",
      "fee": 0.25,
      "feeCurrencyCode": "USD",
      "discount": 0,
      "discountCurrencyCode": "USD",
      "submittedAt": "2022-03-29 07:04:21",
      "balanceInfo": {
        "oldBalance": 9997.34912,
        "newBalance": 9994.69824,
        "cost": 2.65088,
        "currencyCode": "USD",
        "curencyName": "US Dollar",
        "updatedAt": "2022-03-29 11:04:21"
      },
      "billDetails": {
        "type": "ELECTRICITY_BILL_PAYMENT",
        "billerId": 2,
        "billerName": "Abuja Electricity Postpaid",
        "billerCountryCode": "NG",
        "serviceType": "POSTPAID",
        "completedAt": "2022-03-29 07:04:25",
        "subscriberDetails": {
          "accountNumber": 4223568280
        }
      }
    }
  },
  {},
  {}
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |


# Reloadly-Utility-Payments-Transaction-by-Id

```ts
async reloadlyUtilityPaymentsTransactionById(
  accept: string,
  authorization: string,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `id` | `number` | Template, Required | The utility payment's identification number. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.utilities-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const id = 10;
try {
  const { result, ...httpResponse } = await utilityPaymentsTransactionsController.reloadlyUtilityPaymentsTransactionById(accept, authorization, id);
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
[
  {
    "code": "PAYMENT_PROCESSED_SUCCESSFULLY",
    "message": "The payment was processed successfully",
    "transaction": {
      "id": 13,
      "status": "SUCCESSFUL",
      "referenceId": "april-electricity-bill",
      "amount": 1000,
      "amountCurrencyCode": "NGN",
      "deliveryAmount": 1000,
      "deliveryAmountCurrencyCode": "NGN",
      "fee": 0.25,
      "feeCurrencyCode": "USD",
      "discount": 0,
      "discountCurrencyCode": "USD",
      "submittedAt": "2022-03-29 07:04:21",
      "balanceInfo": {
        "oldBalance": 9997.34912,
        "newBalance": 9994.69824,
        "cost": 2.65088,
        "currencyCode": "USD",
        "curencyName": "US Dollar",
        "updatedAt": "2022-03-29 11:04:21"
      },
      "billDetails": {
        "type": "ELECTRICITY_BILL_PAYMENT",
        "billerId": 2,
        "billerName": "Abuja Electricity Postpaid",
        "billerCountryCode": "NG",
        "serviceType": "POSTPAID",
        "completedAt": "2022-03-29 07:04:25",
        "subscriberDetails": {
          "accountNumber": 4223568280
        }
      }
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not found | `ApiError` |

