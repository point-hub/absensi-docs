---
prev:
  text: 'Forgot Password'
  link: '../forgot-password'
next:
  text: 'My Account'
  link: '/v1.0/my-account/about'
---

# Reset Password

The Reset Password feature allows users to create a new password after requesting a password reset through the Forgot Password process. It ensures secure account recovery while protecting against unauthorized access.

This page is accessed through a secure, time-limited reset link sent to the user’s registered email address.

- Path: `/reset-password`

## Scenarios

| 1.6.S Success Scenarios |
| ---- |
| [1.6.S1. Reset password succeeds.](./scenarios/s1/) |

| 1.6.F Failed Scenarios |
| ---- |
| [1.6.F1. Reset password fails when required fields are empty.](./scenarios/f1/) |
| [1.6.F2. Reset password fails when password is not strong enough.](./scenarios/f2/) |
| [1.6.F3. Reset password fails when password confirmation doesn't match.](./scenarios/f3/) |