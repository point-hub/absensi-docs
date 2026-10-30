# Signup

The Signup feature allows new users to create an account in the application. It is the first step for accessing the system and using its accounting features.

- Path: `/signup`

## Scenarios

| 1.1.S Success Scenarios |
| ---- |
| [1.1.S1. Signup succeeds.](/auth/signup/scenarios/s1/) |

| 1.1.F Failed Scenarios |
| --- |
| [1.1.F1. Signup fails when required fields are empty.](/auth/signup/scenarios/f1/) |
| [1.1.F2. Signup fails when username already exists.](/auth/signup/scenarios/f2/) |
| [1.1.F3. Signup fails when email already exists.](/auth/signup/scenarios/f3/) |
| [1.1.F4. Signup fails when password is not strong enough.](/auth/signup/scenarios/f4/) |
| [1.1.F5. Signup fails when password confirmation doesn't match.](/auth/signup/scenarios/f5/) |