# Gift Cards-Products

```ts
const giftCardsProductsController = new GiftCardsProductsController(client);
```

## Class Name

`GiftCardsProductsController`

## Methods

* [Reloadly-Gift-Cards-Products](../../doc/controllers/gift-cards-products.md#reloadly-gift-cards-products)
* [Reloadly-Gift-Cards-Product-by-Id](../../doc/controllers/gift-cards-products.md#reloadly-gift-cards-product-by-id)
* [Reloadly-Gift-Cards-Product-by-Iso](../../doc/controllers/gift-cards-products.md#reloadly-gift-cards-product-by-iso)


# Reloadly-Gift-Cards-Products

```ts
async reloadlyGiftCardsProducts(
  accept: string,
  authorization: string,
  includeRange?: boolean,
  includeFixed?: boolean,
  size?: number,
  page?: string,
  productName?: string,
  countryCode?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `includeRange` | `boolean \| undefined` | Query, Optional | Indicates the list of gift card products with the denominationType property specified as RANGE are to be retrieved. |
| `includeFixed` | `boolean \| undefined` | Query, Optional | Indicates the list of gift card products with the denominationType property specified as FIXED are to be retrieved. |
| `size` | `number \| undefined` | Query, Optional | This indicates the number of gift card products to be retrieved on a page. |
| `page` | `string \| undefined` | Query, Optional | This indicates the page of the product list being retrieved. |
| `productName` | `string \| undefined` | Query, Optional | Indicates the name of the gift card product. |
| `countryCode` | `string \| undefined` | Query, Optional | Indicates the ISO code of the country whose gift card products are to be retrieved. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const includeRange = true;
const includeFixed = true;
const size = 10;
const page = '1';
const productName = 'Amazon';
const countryCode = 'US';
try {
  const { result, ...httpResponse } = await giftCardsProductsController.reloadlyGiftCardsProducts(accept, authorization, includeRange, includeFixed, size, page, productName, countryCode);
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
    "productId": 1,
    "productName": "1-800-PetSupplies",
    "global": false,
    "senderFee": 205.29,
    "discountPercentage": 7.5,
    "denominationType": "FIXED",
    "recipientCurrencyCode": "USD",
    "minRecipientDenomination": null,
    "maxrecipientDenomination": null,
    "senderCurrencyCode": "NGN",
    "minSenderDenomination": null,
    "maxSenderDenomination": null,
    "fixedRecipientDenominations": [
      25,
      50
    ],
    "fixedSenderDenominations": [
      10264.5,
      20529
    ],
    "fixedRecipientToSenderDenominationsMap": [
      {
        "25.00": 10264.5
      },
      {
        "50.00": 20529
      }
    ],
    "logoUrls": [
      "https://cdn.reloadly.com/giftcards/5daa2b8b-b1ad-4ca6-a34d-a7ce3c14dfaf.jpg"
    ],
    "brand": {
      "brandId": 1,
      "brandName": "1-800-PetSupplies"
    },
    "country": {
      "isoName": "US",
      "name": "United States",
      "flagUrl": "https://s3.amazonaws.com/rld-flags/us.svg"
    },
    "redeemInstruction": {
      "concise": "This card is redeemable for merchandise on www.1-800-petsupplies.com",
      "verbose": "Your acceptance of this eCertificate constitutes your agreement to these terms and conditions. This card is redeemable in U.S. only for merchandise on www.1-800-petsupplies.com . Only two eCertificates are redeemable per order. eCertificates cannot be redeemed for cash, except as required by law. Void if altered or reproduced. This gift card is issued in U.S. funds by Tabcom, LLC. When Redeeming online please be sure to enter the entire gift card number including preceding zeros. The maximum number of eCertificates that can be used for phone is nine. By accepting these Terms and Conditions through your use of this Site, you certify that you reside in the United States and are 18 years of age or older. If you are under the age of 18 but at least 14 years of age you may use this Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms and Conditions."
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


# Reloadly-Gift-Cards-Product-by-Id

```ts
async reloadlyGiftCardsProductById(
  accept: string,
  authorization: string,
  productid: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `productid` | `number` | Template, Required | The product's identification number. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const productid = 10;
try {
  const { result, ...httpResponse } = await giftCardsProductsController.reloadlyGiftCardsProductById(accept, authorization, productid);
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
  "productId": 1,
  "productName": "1-800-PetSupplies",
  "global": false,
  "senderFee": 205.29,
  "discountPercentage": 7.5,
  "denominationType": "FIXED",
  "recipientCurrencyCode": "USD",
  "minRecipientDenomination": null,
  "maxrecipientDenomination": null,
  "senderCurrencyCode": "NGN",
  "minSenderDenomination": null,
  "maxSenderDenomination": null,
  "fixedRecipientDenominations": [
    25,
    50
  ],
  "fixedSenderDenominations": [
    10264.5,
    20529
  ],
  "fixedRecipientToSenderDenominationsMap": [
    {
      "25.00": 10264.5
    },
    {
      "50.00": 20529
    }
  ],
  "logoUrls": [
    "https://cdn.reloadly.com/giftcards/5daa2b8b-b1ad-4ca6-a34d-a7ce3c14dfaf.jpg"
  ],
  "brand": {
    "brandId": 1,
    "brandName": "1-800-PetSupplies"
  },
  "country": {
    "isoName": "US",
    "name": "United States",
    "flagUrl": "https://s3.amazonaws.com/rld-flags/us.svg"
  },
  "redeemInstruction": {
    "concise": "This card is redeemable for merchandise on www.1-800-petsupplies.com",
    "verbose": "Your acceptance of this eCertificate constitutes your agreement to these terms and conditions. This card is redeemable in U.S. only for merchandise on www.1-800-petsupplies.com . Only two eCertificates are redeemable per order. eCertificates cannot be redeemed for cash, except as required by law. Void if altered or reproduced. This gift card is issued in U.S. funds by Tabcom, LLC. When Redeeming online please be sure to enter the entire gift card number including preceding zeros. The maximum number of eCertificates that can be used for phone is nine. By accepting these Terms and Conditions through your use of this Site, you certify that you reside in the United States and are 18 years of age or older. If you are under the age of 18 but at least 14 years of age you may use this Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms and Conditions."
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The product was either not found or is no longer available, Please contact support | `ApiError` |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not found | `ApiError` |


# Reloadly-Gift-Cards-Product-by-Iso

```ts
async reloadlyGiftCardsProductByIso(
  accept: string,
  authorization: string,
  countrycode: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `countrycode` | `string` | Template, Required | The ISO code of the country you want to display available gift cards for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const countrycode = 'US';
try {
  const { result, ...httpResponse } = await giftCardsProductsController.reloadlyGiftCardsProductByIso(accept, authorization, countrycode);
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
  "productId": 1,
  "productName": "1-800-PetSupplies",
  "global": false,
  "senderFee": 205.29,
  "discountPercentage": 7.5,
  "denominationType": "FIXED",
  "recipientCurrencyCode": "USD",
  "minRecipientDenomination": null,
  "maxrecipientDenomination": null,
  "senderCurrencyCode": "NGN",
  "minSenderDenomination": null,
  "maxSenderDenomination": null,
  "fixedRecipientDenominations": [
    25,
    50
  ],
  "fixedSenderDenominations": [
    10264.5,
    20529
  ],
  "fixedRecipientToSenderDenominationsMap": [
    {
      "25.00": 10264.5
    },
    {
      "50.00": 20529
    }
  ],
  "logoUrls": [
    "https://cdn.reloadly.com/giftcards/5daa2b8b-b1ad-4ca6-a34d-a7ce3c14dfaf.jpg"
  ],
  "brand": {
    "brandId": 1,
    "brandName": "1-800-PetSupplies"
  },
  "country": {
    "isoName": "US",
    "name": "United States",
    "flagUrl": "https://s3.amazonaws.com/rld-flags/us.svg"
  },
  "redeemInstruction": {
    "concise": "This card is redeemable for merchandise on www.1-800-petsupplies.com",
    "verbose": "Your acceptance of this eCertificate constitutes your agreement to these terms and conditions. This card is redeemable in U.S. only for merchandise on www.1-800-petsupplies.com . Only two eCertificates are redeemable per order. eCertificates cannot be redeemed for cash, except as required by law. Void if altered or reproduced. This gift card is issued in U.S. funds by Tabcom, LLC. When Redeeming online please be sure to enter the entire gift card number including preceding zeros. The maximum number of eCertificates that can be used for phone is nine. By accepting these Terms and Conditions through your use of this Site, you certify that you reside in the United States and are 18 years of age or older. If you are under the age of 18 but at least 14 years of age you may use this Site only under the supervision of a parent or legal guardian who agrees to be bound by these Terms and Conditions."
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Country not found and/or not currently supported | `ApiError` |

