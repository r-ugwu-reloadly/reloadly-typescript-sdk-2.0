# Airtime-Promotions

```ts
const airtimePromotionsController = new AirtimePromotionsController(client);
```

## Class Name

`AirtimePromotionsController`

## Methods

* [Reloadly-Airtime-Promotions](../../doc/controllers/airtime-promotions.md#reloadly-airtime-promotions)
* [Reloadly-Airtime-Promotion-by-Id](../../doc/controllers/airtime-promotions.md#reloadly-airtime-promotion-by-id)
* [Reloadly-Airtime-Promotion-by-Iso](../../doc/controllers/airtime-promotions.md#reloadly-airtime-promotion-by-iso)
* [Reloadly-Airtime-Promotion-by-Operator-Id](../../doc/controllers/airtime-promotions.md#reloadly-airtime-promotion-by-operator-id)


# Reloadly-Airtime-Promotions

```ts
async reloadlyAirtimePromotions(
  accept: string,
  authorization: string,
  size?: number,
  page?: number,
  languageCode?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `size` | `number \| undefined` | Query, Optional | This indicates the number of promotions to be retrieved on a page. Default value is 200. |
| `page` | `number \| undefined` | Query, Optional | This indicates the page of the promotions list being retrieved. Default value is 1. |
| `languageCode` | `number \| undefined` | Query, Optional | This indicates the language you want the promotion information to be displayed in. The language code is to be specified in the ISO 639-1 format. Choices are 'EN', 'ES', 'FR', 'IT', 'PT', 'ZH', 'AR', 'HI', 'HT', 'JA' and 'DE'. Default is 'EN'. This is a case-insensitive field. The promotion information is returned in your requested language irrespective of the original language in which the promotion was launched. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const size = 10;
const page = 1;
try {
  const { result, ...httpResponse } = await airtimePromotionsController.reloadlyAirtimePromotions(accept, authorization, size, page);
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
      "promotionId": 1,
      "operatorId": 129,
      "title": "Tigo El Salvador From 25 Jun 2018 00:00 To 25 July...",
      "title2": "Get 500 MB and 150 minutes for USA or Canada",
      "description": "For top ups of $10 or more, customer...",
      "startDate": "Mon, 25 Jun 2018 06:00:00 +0000",
      "endDate": "Tue, 26 Jun 2018 05:59:00 +0000",
      "denominations": "USD 10 and up",
      "localDenominations": null
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


# Reloadly-Airtime-Promotion-by-Id

```ts
async reloadlyAirtimePromotionById(
  accept: string,
  authorization: string,
  promotionid: string,
  languageCode?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `promotionid` | `string` | Template, Required | The promotion's identification number. |
| `languageCode` | `string \| undefined` | Query, Optional | This indicates the language you want the promotion information to be displayed in. The language code is to be specified in the ISO 639-1 format. Choices are 'EN', 'ES', 'FR', 'IT', 'PT', 'ZH', 'AR', 'HI', 'HT', 'JA' and 'DE'. Default is 'EN'. This is a case-insensitive field. The promotion information is returned in your requested language irrespective of the original language in which the promotion was launched. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const promotionid = '5583';
const languageCode = 'EN';
try {
  const { result, ...httpResponse } = await airtimePromotionsController.reloadlyAirtimePromotionById(accept, authorization, promotionid, languageCode);
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
  "content": {
    "promotionId": 1,
    "operatorId": 129,
    "title": "Tigo El Salvador From 25 Jun 2018 00:00 To 25 July...",
    "title2": "Get 500 MB and 150 minutes for USA or Canada",
    "description": "For top ups of $10 or more, customer...",
    "startDate": "Mon, 25 Jun 2018 06:00:00 +0000",
    "endDate": "Tue, 26 Jun 2018 05:59:00 +0000",
    "denominations": "USD 10 and up",
    "localDenominations": null
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Promotion not found | `ApiError` |


# Reloadly-Airtime-Promotion-by-Iso

```ts
async reloadlyAirtimePromotionByIso(
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
| `countrycode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const countrycode = 'US';
try {
  const { result, ...httpResponse } = await airtimePromotionsController.reloadlyAirtimePromotionByIso(accept, authorization, countrycode);
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
      "promotionId": 1,
      "operatorId": 129,
      "title": "Tigo El Salvador From 25 Jun 2018 00:00 To 25 July...",
      "title2": "Get 500 MB and 150 minutes for USA or Canada",
      "description": "For top ups of $10 or more, customer...",
      "startDate": "Mon, 25 Jun 2018 06:00:00 +0000",
      "endDate": "Tue, 26 Jun 2018 05:59:00 +0000",
      "denominations": "USD 10 and up",
      "localDenominations": null
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


# Reloadly-Airtime-Promotion-by-Operator-Id

```ts
async reloadlyAirtimePromotionByOperatorId(
  accept: string,
  authorization: string,
  operatorid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Template, Required | - |
| `operatorid` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const operatorid = '129';
try {
  const { result, ...httpResponse } = await airtimePromotionsController.reloadlyAirtimePromotionByOperatorId(accept, authorization, operatorid);
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
      "promotionId": 1,
      "operatorId": 129,
      "title": "Tigo El Salvador From 25 Jun 2018 00:00 To 25 July...",
      "title2": "Get 500 MB and 150 minutes for USA or Canada",
      "description": "For top ups of $10 or more, customer...",
      "startDate": "Mon, 25 Jun 2018 06:00:00 +0000",
      "endDate": "Tue, 26 Jun 2018 05:59:00 +0000",
      "denominations": "USD 10 and up",
      "localDenominations": null
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

