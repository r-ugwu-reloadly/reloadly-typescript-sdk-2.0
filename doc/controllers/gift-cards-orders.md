# Gift Cards-Orders

```ts
const giftCardsOrdersController = new GiftCardsOrdersController(client);
```

## Class Name

`GiftCardsOrdersController`

## Methods

* [Reloadly-Gift-Cards-Redeem-Codes](../../doc/controllers/gift-cards-orders.md#reloadly-gift-cards-redeem-codes)
* [Reloadly-Gift-Cards-Orders](../../doc/controllers/gift-cards-orders.md#reloadly-gift-cards-orders)


# Reloadly-Gift-Cards-Redeem-Codes

```ts
async reloadlyGiftCardsRedeemCodes(
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
| `transactionid` | `number` | Template, Required | Indicates the transaction identification number of the gift card's redeem code to be retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const transactionid = 2;
try {
  const { result, ...httpResponse } = await giftCardsOrdersController.reloadlyGiftCardsRedeemCodes(accept, authorization, transactionid);
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
  "cardNumber": 6120200345149064,
  "pinCode": 5821
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Invalid transaction ID | `ApiError` |


# Reloadly-Gift-Cards-Orders

```ts
async reloadlyGiftCardsOrders(
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
| `body` | `unknown` | Body, Required | Request Payload |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const contentType = null;
const body = '{"productId":120,"countryCode":"US","quantity":1,"unitPrice":1,"customIdentifier":"obucks10","senderName":"John Doe","recipientEmail":"anyone@email.com","recipientPhoneDetails":{"countryCode":"ES","phoneNumber":"657228901"}}';
try {
  const { result, ...httpResponse } = await giftCardsOrdersController.reloadlyGiftCardsOrders(accept, authorization, body);
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
  "transactionId": 1,
  "amount": 34536.21,
  "discount": 1709.72,
  "currencyCode": "NGN",
  "fee": 285,
  "recipientEmail": "anyone@email.com",
  "customIdentifier": "obucks1dime0",
  "status": "SUCCESSFUL",
  "product": {
    "productId": 1,
    "productName": "1-800-PetSupplies",
    "countryCode": "PS",
    "quantity": 1,
    "unitPrice": 59.99,
    "totalPrice": 59.99,
    "currencyCode": "USD",
    "brand": {
      "brandId": 6,
      "brandName": "1-800-PetSupplies"
    }
  },
  "smsFee": 56.91,
  "recipientPhone": 34657829900,
  "transactionCreatedTime": "2022-02-28 13:46:00"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid price, please ensure you selected the right price | `ApiError` |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not found | `ApiError` |

