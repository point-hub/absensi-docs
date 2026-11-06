---
aside: false
prev:
  text: 'Forgot Password | Success 1'
  link: '../s1'
next:
  text: 'Forgot Password | Failed 2'
  link: '../f2'
---

# Scenario 1.5. Forgot Password

## 1.5.F1. Forgot password fails when required fields are empty.

- `GIVEN` user visit `/signin`
- `WHEN` user click button "forgot-password"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.potrait-img}

- `WHEN` user click button "request-reset-password"

- `THEN` user see "The email field is required.".

![alt text](./request-password-fail.png){.potrait-img}