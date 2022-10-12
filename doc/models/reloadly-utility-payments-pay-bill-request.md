
# Reloadly Utility Payments Pay Bill Request

## Structure

`ReloadlyUtilityPaymentsPayBillRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriberAccountNumber` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `billerId` | `number` | Required | - |
| `useLocalAmount` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "subscriberAccountNumber": "04223568280",
  "amount": 1000,
  "billerId": 5,
  "useLocalAmount": false
}
```

