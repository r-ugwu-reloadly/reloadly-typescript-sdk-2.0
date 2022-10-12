
# Reloadly Auth Request

## Structure

`ReloadlyAuthRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Required | - |
| `clientSecret` | `string` | Required | - |
| `grantType` | `string` | Required | - |
| `audience` | `string` | Required | - |

## Example (as JSON)

```json
{
  "client_id": "CLIENT_ID_GOES_HERE",
  "client_secret": "CLIENT_SECRET_GOES_HERE",
  "grant_type": "client_credentials",
  "audience": "https://topups.reloadly.com"
}
```

