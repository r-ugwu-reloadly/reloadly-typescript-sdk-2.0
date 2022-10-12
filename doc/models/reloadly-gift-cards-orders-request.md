
# Reloadly Gift Cards Orders Request

## Structure

`ReloadlyGiftCardsOrdersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number` | Required | - |
| `countryCode` | `string` | Required | - |
| `quantity` | `number` | Required | - |
| `unitPrice` | `number` | Required | - |
| `customIdentifier` | `string` | Required | - |
| `senderName` | `string` | Required | - |
| `recipientEmail` | `string` | Required | - |
| `recipientPhoneDetails` | [`RecipientPhoneDetails`](../../doc/models/recipient-phone-details.md) | Required | - |

## Example (as JSON)

```json
{
  "productId": 120,
  "countryCode": "US",
  "quantity": 1,
  "unitPrice": 1,
  "customIdentifier": "obucks10",
  "senderName": "John Doe",
  "recipientEmail": "anyone@email.com",
  "recipientPhoneDetails": {
    "countryCode": "ES",
    "phoneNumber": "657228901"
  }
}
```

