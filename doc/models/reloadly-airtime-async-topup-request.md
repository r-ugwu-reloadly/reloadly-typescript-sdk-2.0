
# Reloadly Airtime Async Topup Request

## Structure

`ReloadlyAirtimeAsyncTopupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operatorId` | `string` | Required | - |
| `amount` | `string` | Required | - |
| `useLocalAmount` | `boolean` | Required | - |
| `customIdentifier` | `string` | Required | - |
| `recipientPhone` | [`RecipientPhone`](../../doc/models/recipient-phone.md) | Required | - |
| `senderPhone` | [`SenderPhone`](../../doc/models/sender-phone.md) | Required | - |

## Example (as JSON)

```json
{
  "operatorId": "444",
  "amount": "1",
  "useLocalAmount": false,
  "customIdentifier": "This is example identifier",
  "recipientPhone": {
    "countryCode": "ES",
    "number": "657228901"
  },
  "senderPhone": {
    "countryCode": "CA",
    "number": "1231231231"
  }
}
```

