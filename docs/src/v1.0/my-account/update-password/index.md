---
prev:
  text: 'My Account'
  link: '../about'
next:
  text: 'Update Profile'
  link: '../update-profile'
---

# Update Password

The Update Password page allows users to change their current password while logged into the application. This feature helps maintain account security and gives users control over their login credentials.

Unlike Reset Password, this feature is used when the user still remembers their current password.

- Path: `/my-account/password`

## Scenarios

| 2.1.S Success Scenarios |
| ---- |
| [2.1.S1. Update password succeeds.](./s1) |

| 2.1.F Failed Scenarios |
| ---- |
| [2.1.F1. Update password fails when the user is not authenticated.](./f1) |
| [2.1.F2. Update password fails when required fields are empty.](./f2) |
| [2.1.F3. Update password fails when password is not strong enough.](./f3) |
| [2.1.F4. Update password fails when password confirmation doesn't match.](./f4) |