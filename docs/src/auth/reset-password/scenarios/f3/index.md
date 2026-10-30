---
aside: false
---

# Scenario 1.6. Reset Password

## 1.6.F3. Reset password fails when password confirmation doesn't match.

- `GIVEN` user receive an email
- `WHEN` user click button "reset-password"

![alt text](./reset-password-email.png){.potrait-img}

- `WHEN` user type "Admin123!" into input "new-password"
- `AND` user click button "reset-password"
- `THEN` user see "Password doesn't match".

![alt text](./reset-password-fail.png){.potrait-img}