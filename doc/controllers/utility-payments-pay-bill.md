# Utility Payments-Pay Bill

```ts
const utilityPaymentsPayBillController = new UtilityPaymentsPayBillController(client);
```

## Class Name

`UtilityPaymentsPayBillController`


# Reloadly-Utility-Payments-Pay-Bill

```ts
async reloadlyUtilityPaymentsPayBill(
  accept: string,
  authorization: string,
  body: ReloadlyUtilityPaymentsPayBillRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `authorization` | `string` | Header, Required | - |
| `body` | [`ReloadlyUtilityPaymentsPayBillRequest`](../../doc/models/reloadly-utility-payments-pay-bill-request.md) | Body, Required | Request Payload |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/com.reloadly.utilities-v1+json';
const authorization = 'Bearer <YOUR_TOKEN_HERE>';
const contentType = null;
const body: ReloadlyUtilityPaymentsPayBillRequest = {
  subscriberAccountNumber: '04223568280',
  amount: 1000,
  billerId: 5,
  useLocalAmount: false,
};

try {
  const { result, ...httpResponse } = await utilityPaymentsPayBillController.reloadlyUtilityPaymentsPayBill(accept, authorization, body);
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
  "id": 36,
  "status": "PROCESSING",
  "referenceId": "4a391847-n193-22k8-wqkl-9h3s7428m036",
  "code": "PAYMENT_PROCESSING_IN_PROGRESS",
  "message": "The payment is being processed, status will be updated when biller processes the payment.",
  "submittedAt": "2022-05-18 09:13:53",
  "finalStatusAvailabilityAt": "2022-05-19 09:13:52"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Full authentication is required to access this resource | `ApiError` |
| 404 | Not Found | `ApiError` |

