# Break Start

Records an employee leaving the workplace during working hours.

- Path: `/break-start`

**Scenarios:**

| 4.3.S Success Scenarios |
| ---- |
| [4.3.S1. User can record a break start successfully.](/attendances/break-start/scenarios/s1/) |

| 4.3.F Failed Scenarios |
| ---- |
| [4.3.F1. Break Start fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [4.3.F2. Break Start fails when the user has not checked in.](/attendances/break-start/scenarios/f2/) |
| [4.3.F3. Break Start fails when the user already checked out.](/attendances/break-start/scenarios/f3/) |
| [4.3.F4. Break Start fails when a previous break start is still active.](/attendances/break-start/scenarios/f4/) |
| [4.3.F5. Break Start fails when the user has not captured a photo.](/attendances/break-start/scenarios/f5/) |
| [4.3.F6. Break Start fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-start/scenarios/f6/) |