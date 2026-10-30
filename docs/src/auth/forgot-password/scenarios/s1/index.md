---
aside: false
---

# Scenario 1.5. Forgot Password

## 1.5.S1. Forgot password succeeds.

- `GIVEN` user visit `/signin`
- `WHEN` user click button "forgot-password"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.potrait-img}

- `WHEN` user type "admin@example.com" into input "email"
- `AND` user click button "request-reset-password"

![alt text](./forgot-password-fill-form.png){.potrait-img}

- `THEN` user redirected to home page.

![alt text](./request-password-success.png){.potrait-img}