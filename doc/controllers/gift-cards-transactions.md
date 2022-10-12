# Gift Cards-Transactions

```ts
const giftCardsTransactionsController = new GiftCardsTransactionsController(client);
```

## Class Name

`GiftCardsTransactionsController`

## Methods

* [Reloadly-Gift-Cards-Transactions](../../doc/controllers/gift-cards-transactions.md#reloadly-gift-cards-transactions)
* [Reloadly-Gift-Cards-Transaction-by-Id](../../doc/controllers/gift-cards-transactions.md#reloadly-gift-cards-transaction-by-id)


# Reloadly-Gift-Cards-Transactions

```ts
async reloadlyGiftCardsTransactions(
  accept: string,
  authorization: string,
  size?: string,
  page?: string,
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
| `size` | `string \| undefined` | Query, Optional | This indicates the number of transactions to be retrieved on a page. |
| `page` | `string \| undefined` | Query, Optional | This indicates the page of the transactions list being retrieved. |
| `startDate` | `string \| undefined` | Query, Optional | Indicates the start date for the range of transactions to be retrieved. |
| `endDate` | `string \| undefined` | Query, Optional | Indicates the end date for the range of transactions to be retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const size = '10';
const page = '1';
const startDate = '2021-06-01 10:00:00';
const endDate = '2021-07-20 19:17:02';
try {
  const { result, ...httpResponse } = await giftCardsTransactionsController.reloadlyGiftCardsTransactions(accept, authorization, size, page, startDate, endDate);
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
    "transactionId": 1,
    "amount": 60553.3575,
    "discount": 0,
    "currencyCode": "NGN",
    "fee": 198.35026,
    "customIdentifier": "obucks3",
    "status": "SUCCESSFUL",
    "product": {
      "productId": 4,
      "productName": "Amazon Spain",
      "countryCode": "ES",
      "quantity": 5,
      "unitPrice": 25,
      "totalPrice": 125,
      "currencyCode": "EUR",
      "brand": {
        "brandId": 2,
        "brandName": "Amazon"
      }
    },
    "smsFee": 56.91,
    "receipientPhone": 34657829900,
    "transactionCreatedTime": "2022-02-28 13:46:00"
  },
  {},
  {}
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Could not retrieve/update resources at the moment, please try again later | `ApiError` |


# Reloadly-Gift-Cards-Transaction-by-Id

```ts
async reloadlyGiftCardsTransactionById(
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
| `transactionid` | `string` | Template, Required | Indicates the identification number of the transaction to be retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const transactionid = '2';
try {
  const { result, ...httpResponse } = await giftCardsTransactionsController.reloadlyGiftCardsTransactionById(accept, authorization, transactionid);
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
    "transactionId": 1,
    "amount": 60553.3575,
    "discount": 0,
    "currencyCode": "NGN",
    "fee": 198.35026,
    "customIdentifier": "obucks3",
    "status": "SUCCESSFUL",
    "product": {
      "productId": 4,
      "productName": "Amazon Spain",
      "countryCode": "ES",
      "quantity": 5,
      "unitPrice": 25,
      "totalPrice": 125,
      "currencyCode": "EUR",
      "brand": {
        "brandId": 2,
        "brandName": "Amazon"
      }
    },
    "smsFee": 56.91,
    "receipientPhone": 34657829900,
    "transactionCreatedTime": "2022-02-28 13:46:00"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Indicates the identification number of the transaction to be retrieved. | `ApiError` |
| 404 | Could not retrieve/update resources at the moment, please try again later | `ApiError` |

