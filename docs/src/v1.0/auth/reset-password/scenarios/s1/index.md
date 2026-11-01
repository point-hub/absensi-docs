---
aside: false
---

# Scenario 1.6. Reset Password

## 1.6.S1. Reset password succeeds.

- `GIVEN` user receive an email
- `WHEN` user click button "reset-password"

![alt text](./reset-password-email.png){.potrait-img}

- `WHEN` user type "Admin123!" into input "new-password"
- `AND` user type "Admin123!" into input "confirm-password"
- `AND` user click button "reset-password"
- `THEN` user see "Reset Password Success".
- `AND` user redirected to signin page.

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.potrait-img}