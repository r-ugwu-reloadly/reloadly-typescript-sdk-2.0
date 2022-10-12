# Authentication

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`


# Reloadly-Auth

```ts
async reloadlyAuth(
  contentType: string,
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | `unknown` | Body, Required | Request Payload |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = 'application/json';
const body = '{"client_id":"CLIENT_ID_GOES_HERE","client_secret":"CLIENT_SECRET_GOES_HERE","grant_type":"client_credentials","audience":"https://topups.reloadly.com"}';
try {
  const { result, ...httpResponse } = await authenticationController.reloadlyAuth(contentType, body);
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
  "access_token": "eyJraWQiOiIwMDA1YzFmMC0xMjQ3LTRmNmUtYjU2ZC1jM2ZkZDVmMzhhOTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2ODkzIiwiaXNzIjoiaHR0cHM6Ly9yZWxvYWRseS5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6ZmFsc2UsImh0dHBzOi8vcmVsb2FkbHkuY29tL3ByZXBhaWRVc2VySWQiOiI2ODkzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYucmVsb2FkbHkuY29tIiwibmJmIjoxNjY0OTgwNzk4LCJhenAiOiI2ODkzIiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE2NzAxNjgzOTgsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjYzMDQ2ODEwLWQzNTUtNDc3Yy05YjQ1LTMwOWZhMmRiNzZlOSIsImlhdCI6MTY2NDk4MDc5OCtianRpIjoiNzE3MTgzNWEtMmZkOC00NjRiLWFkODgtYzY0YjZiMGZlYWZjIn0.FltioNulWc9IV78tDC96AD7CfPe9PIl1yQjso778o4A",
  "scope": "send-topups read-operators read-promotions read-topups-history read-prepaid-balance read-prepaid-commissions",
  "expires_in": 5184000,
  "token_type": "Bearer"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Access Denied | `ApiError` |

