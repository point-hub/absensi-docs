---
aside: false
---

# Scenario 1.3. Signin

## 1.3.S1. Signin succeeds.

- `GIVEN` user visit `/signin`

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.potrait-img}

- `WHEN` user type "admin" into input "username"
- `AND` user type "12345678" into input "password"
- `AND` user click button "sign-in"
- `THEN` user redirected to home page.

![alt text](./home.png){.potrait-img}