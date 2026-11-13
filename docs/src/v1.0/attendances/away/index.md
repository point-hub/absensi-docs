---
prev:
  text: 'Check Out'
  link: '../check-out'
next:
  text: 'Return'
  link: '../return'
---

# Away

Records an user leaving the workplace during working hours.

- Path: `/away`

**Scenarios:**

| 4.3.S Success Scenarios |
| ---- |
| [4.3.S1. Away succeeds.](./s1) |

| 4.3.F Failed Scenarios |
| ---- |
| [4.3.F1. Away fails when the user is not authenticated.](./f1) |
| [4.3.F2. Away fails when the user has not checked in.](./f2) |
| [4.3.F3. Away fails when the user already checked out.](./f3) |
| [4.3.F4. Away fails when a previous away is still active.](./f4) |
| [4.3.F5. Away fails when the user has not captured a photo.](./f5) |
| [4.3.F6. Away fails when the user's GPS latitude and longitude cannot be determined.](./f6) |