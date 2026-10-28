# Break End

Records an employee's return to the workplace after a temporary absence.

- Path: `/break-end`

**Scenarios:**

| 4.4.S Success Scenarios |
| ---- |
| [4.4.S1. User can record a break end successfully.](/attendances/break-end/scenarios/s1/) |

| 4.4.F Failed Scenarios |
| ---- |
| [4.4.F1. Break End fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [4.4.F2. Break End fails when there is no active break start.](/attendances/break-end/scenarios/f2/) |
| [4.4.F3. Break End fails when the user has not captured a photo.](/attendances/break-start/scenarios/f3/) |
| [4.4.F4. Break End fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-start/scenarios/f4/) |