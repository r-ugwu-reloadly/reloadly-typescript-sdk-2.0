# Gift Cards-Discounts

```ts
const giftCardsDiscountsController = new GiftCardsDiscountsController(client);
```

## Class Name

`GiftCardsDiscountsController`

## Methods

* [Reloadly-Gift-Cards-Discounts](../../doc/controllers/gift-cards-discounts.md#reloadly-gift-cards-discounts)
* [Reloadly-Gift-Cards-Discount-by-Product-Id](../../doc/controllers/gift-cards-discounts.md#reloadly-gift-cards-discount-by-product-id)


# Reloadly-Gift-Cards-Discounts

```ts
async reloadlyGiftCardsDiscounts(
  accept: string,
  authorization: string,
  size?: string,
  page?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `size` | `string \| undefined` | Template, Optional | Indicates the number of gift card products offering discounts to be retrieved on a page. |
| `page` | `string \| undefined` | Template, Optional | Indicates the page of the list of gift card products offering discounts. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const size = '50';
const page = '2';
try {
  const { result, ...httpResponse } = await giftCardsDiscountsController.reloadlyGiftCardsDiscounts(accept, authorization, size, page);
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
    "product": {
      "productId": 28,
      "productName": "Apple Music 12 month Canada",
      "countryCode": "CA",
      "global": false
    },
    "discountPercentage": 2
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


# Reloadly-Gift-Cards-Discount-by-Product-Id

```ts
async reloadlyGiftCardsDiscountByProductId(
  accept: string,
  authorization: string,
  productid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `productid` | `string` | Template, Required | The product's identification number. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const productid = '5';
try {
  const { result, ...httpResponse } = await giftCardsDiscountsController.reloadlyGiftCardsDiscountByProductId(accept, authorization, productid);
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
  "product": {
    "productId": 28,
    "productName": "Apple Music 12 month Canada",
    "countryCode": "CA",
    "global": false
  },
  "discountPercentage": 2
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not found | `ApiError` |

