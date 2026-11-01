# Break Start

Records an user leaving the workplace during working hours.

- Path: `/break-start`

**Scenarios:**

| 4.3.S Success Scenarios |
| ---- |
| [4.3.S1. Break start succeeds.](./s1) |

| 4.3.F Failed Scenarios |
| ---- |
| [4.3.F1. Break start fails when the user is not authenticated.](./f1) |
| [4.3.F2. Break start fails when the user has not checked in.](./f2) |
| [4.3.F3. Break start fails when the user already checked out.](./f3) |
| [4.3.F4. Break start fails when a previous break start is still active.](./f4) |
| [4.3.F5. Break start fails when the user has not captured a photo.](./f5) |
| [4.3.F6. Break start fails when the user's GPS latitude and longitude cannot be determined.](./f6) |