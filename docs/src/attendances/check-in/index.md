# Check In

Records the start of an user's working day.

- Path: `/check-in`

**Scenarios:**

| 4.1.S Success Scenarios |
| ---- |
| [4.1.S1. Check in succeeds.](/attendances/check-in/scenarios/s1/) |

| 4.1.F Failed Scenarios |
| :--- |
| [4.1.F1. Check in fails when the user is not authenticated.](/attendances/check-in/scenarios/f1/) |
| [4.1.F2. Check in fails when the user has already checked in on the same day.](/attendances/check-in/scenarios/f2/) |
| [4.1.F3. Check in fails when the user has not captured a photo.](/attendances/check-in/scenarios/f3/) |
| [4.1.F4. Check in fails when the user's GPS latitude and longitude cannot be determined.](/attendances/check-in/scenarios/f4/) |