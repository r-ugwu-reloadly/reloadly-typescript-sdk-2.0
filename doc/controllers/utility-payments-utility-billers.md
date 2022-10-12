# Utility Payments-Utility Billers

```ts
const utilityPaymentsUtilityBillersController = new UtilityPaymentsUtilityBillersController(client);
```

## Class Name

`UtilityPaymentsUtilityBillersController`


# Reloadly-Utility-Payments-Billers

```ts
async reloadlyUtilityPaymentsBillers(
  accept: string,
  authorization: string,
  id?: number,
  name?: string,
  type?: string,
  serviceType?: string,
  countryISOCode?: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `id` | `number \| undefined` | Query, Optional | This is the unique identification number of each biller. It uniquely identifies the biller servicing the utility. |
| `name` | `string \| undefined` | Query, Optional | This indicates the biller's name. In situations where the biller's name is exceptionally long, partial names are used. |
| `type` | `string \| undefined` | Query, Optional | This indicates the type of utility payment handled by the biller. Values included are ELECTRICITY_BILL_PAYMENT, WATER_BILL_PAYMENT, TV_BILL_PAYMENT and INTERNET_BILL_PAYMENT. |
| `serviceType` | `string \| undefined` | Query, Optional | This indicates the payment service type being rendered by the utility biller service. Examples are PREPAID and POSTPAID. |
| `countryISOCode` | `string \| undefined` | Query, Optional | This indicates the ISO code of the country where the utility biller is operating in. |
| `page` | `number \| undefined` | Query, Optional | This indicates the page of the billers list being retrieved. Default value is 1. |
| `size` | `number \| undefined` | Query, Optional | This indicates the number of billers to be retrieved on a page. Default value is 200. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.utilities-v1+json';
const authorization = 'Bearer <YOUR TOKEN HERE>';
const id = 12;
const name = 'Eko Electricity';
const type = 'ELECTRICITY_BILL_PAYMENT';
const serviceType = 'PREPAID';
const countryISOCode = 'KE';
const page = 1;
const size = 10;
try {
  const { result, ...httpResponse } = await utilityPaymentsUtilityBillersController.reloadlyUtilityPaymentsBillers(accept, authorization, id, name, type, serviceType, countryISOCode, page, size);
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
      "id": 1,
      "name": "Ikeja Electricity Postpaid",
      "countryIsoCode": "NG",
      "type": "ELECTRICITY_BILL_PAYMENT",
      "serviceType": "POSTPAID",
      "localAmountSupported": true,
      "localTransactionCurrencyCode": "NGN",
      "minLocalTransactionAmount": 1000,
      "maxLocalTransactionAmount": 300000,
      "localTransactionFee": 227.83997,
      "localTransactionFeeCurrencyCode": "NGN",
      "localDiscountPercentage": 0,
      "internatonalAmountSupported": true,
      "internationalTransactionCurrencyCode": "INR",
      "minInternationalTransactionAmount": 194.73483,
      "maxInternationalTransactionAmount": 45567.996,
      "internationalTransactionFee": 227.83997,
      "internationalTransactionFeeCurrencyCode": "INR",
      "internationalDiscountPercentage": 0,
      "fx": [
        {
          "rate": 5.20265
        },
        {
          "curencyCode": "INR"
        }
      ]
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

