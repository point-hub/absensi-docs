# Check Out

Records the end of an user's working day.

- Path: `/check-out`

## Scenarios

| 4.2.S Success Scenarios |
| ---- |
| [4.2.S1. Check out succeeds.](./s1) |

| 4.2.F Failed Scenarios |
| ---- |
| [4.2.F1. Check out fails when the user is not authenticated.](./f1) |
| [4.2.F2. Check out fails when the user has not checked in.](./f2) |
| [4.2.F3. Check out fails when the user has already checked out.](./f3) |
| [4.2.F4. Check out fails when the user has an active break that has not ended.](./f4) |
| [4.2.F5. Check out fails when the user has not captured a photo.](./f5) |
| [4.2.F6. Check out fails when the user's GPS latitude and longitude cannot be determined.](./f6) |