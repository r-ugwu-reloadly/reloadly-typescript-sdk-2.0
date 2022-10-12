# Airtime-Account Balance

```ts
const airtimeAccountBalanceController = new AirtimeAccountBalanceController(client);
```

## Class Name

`AirtimeAccountBalanceController`


# Reloadly-Airtime-Account-Balance

```ts
async reloadlyAirtimeAccountBalance(
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
const accept = 'application/com.reloadly.topups-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
try {
  const { result, ...httpResponse } = await airtimeAccountBalanceController.reloadlyAirtimeAccountBalance(accept, authorization);
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
  "balance": 5000,
  "currencyCode": "USD",
  "currencyName": "US Dollar",
  "updatedAt": "2021-12-04 08:45:51"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |

