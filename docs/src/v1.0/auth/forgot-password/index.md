---
prev:
  text: 'Signout'
  link: '../signout'
next:
  text: 'Reset Password'
  link: '../reset-password'
---

# Forgot Password

The Forgot Password feature allows users to request a password reset if they can no longer remember their account password. It provides a secure way to regain access without contacting system administrators.

- Path: `/forgot-password`

## Scenarios

| 1.5.S Success Scenarios |
| ---- |
| [1.5.S1. Forgot password succeeds.](./scenarios/s1/) |

| 1.5.F Failed Scenarios |
| --- |
| [1.5.F1. Forgot password request fails when required fields are empty.](./scenarios/f1/) |
| [1.5.F2. Forgot password request fails when email is not found.](./scenarios/f2/) |

