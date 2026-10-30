---
aside: false
---

# Scenario 1.6. Reset Password

## 1.6.F1. Reset password fails when required fields are empty.

- `GIVEN` user receive an email
- `WHEN` user click button "reset-password"

![alt text](./reset-password-email.png){.potrait-img}

- `WHEN` user click button "reset-password"
- `THEN` user see "The password field is required.".

![alt text](./reset-password-fail.png){.potrait-img}