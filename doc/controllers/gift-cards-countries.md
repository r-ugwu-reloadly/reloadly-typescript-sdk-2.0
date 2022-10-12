# Gift Cards-Countries

```ts
const giftCardsCountriesController = new GiftCardsCountriesController(client);
```

## Class Name

`GiftCardsCountriesController`

## Methods

* [Reloadly-Gift-Cards-Countries](../../doc/controllers/gift-cards-countries.md#reloadly-gift-cards-countries)
* [Reloadly-Gift-Cards-Country-by-Iso](../../doc/controllers/gift-cards-countries.md#reloadly-gift-cards-country-by-iso)


# Reloadly-Gift-Cards-Countries

```ts
async reloadlyGiftCardsCountries(
  accept: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
try {
  const { result, ...httpResponse } = await giftCardsCountriesController.reloadlyGiftCardsCountries(accept, authorization);
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
    "isoName": "AF",
    "name": "Afghanistan",
    "continent": "Asia",
    "currencyCode": "AFN",
    "currencyName": "Afghan Afghani",
    "currencySymbol": "؋",
    "flag": "https://s3.amazonaws.com/rld-flags/af.svg",
    "callingCodes": [
      "+93"
    ]
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


# Reloadly-Gift-Cards-Country-by-Iso

```ts
async reloadlyGiftCardsCountryByIso(
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
const accept = 'application/com.reloadly.giftcards-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const countrycode = 'PK';
try {
  const { result, ...httpResponse } = await giftCardsCountriesController.reloadlyGiftCardsCountryByIso(accept, authorization, countrycode);
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
    "isoName": "AG",
    "name": "Antigua and Barbuda",
    "continent": "North America",
    "currencyCode": "XCD",
    "currencyName": "East Caribbean Dollar",
    "currencySymbol": "XCD",
    "flag": "https://s3.amazonaws.com/rld-flags/ag.svg",
    "callingCodes": [
      "+1268"
    ]
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Country not found and/or not currently supported | `ApiError` |

