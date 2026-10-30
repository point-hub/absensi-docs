# Break Start

Records an user leaving the workplace during working hours.

- Path: `/break-start`

**Scenarios:**

| 4.3.S Success Scenarios |
| ---- |
| [4.3.S1. Break start succeeds.](/attendances/break-start/scenarios/s1/) |

| 4.3.F Failed Scenarios |
| ---- |
| [4.3.F1. Break start fails when the user is not authenticated.](/attendances/break-start/scenarios/f1/) |
| [4.3.F2. Break start fails when the user has not checked in.](/attendances/break-start/scenarios/f2/) |
| [4.3.F3. Break start fails when the user already checked out.](/attendances/break-start/scenarios/f3/) |
| [4.3.F4. Break start fails when a previous break start is still active.](/attendances/break-start/scenarios/f4/) |
| [4.3.F5. Break start fails when the user has not captured a photo.](/attendances/break-start/scenarios/f5/) |
| [4.3.F6. Break start fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-start/scenarios/f6/) |