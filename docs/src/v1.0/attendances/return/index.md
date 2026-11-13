---
prev:
  text: 'Away'
  link: '../away'
next:
  text: 'List Attendances'
  link: '../list'
---

# Return

Records an user's return to the workplace after a temporary absence.

- Path: `/return`

**Scenarios:**

| 4.4.S Success Scenarios |
| ---- |
| [4.4.S1. Return succeeds.](./s1) |

| 4.4.F Failed Scenarios |
| ---- |
| [4.4.F1. Return fails when the user is not authenticated.](./f1) |
| [4.4.F2. Return fails when there is no active away.](./f2) |
| [4.4.F3. Return fails when the user has not captured a photo.](./f3) |
| [4.4.F4. Return fails when the user's GPS latitude and longitude cannot be determined.](./f4) |