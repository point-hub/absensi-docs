---
aside: false
---

# Scenario 3.3. Read Group

## 3.3.F1. Read group fails when the user is not authenticated.

- `GIVEN` the user visits `/groups/:id` without signing in
- `THEN` the user is redirected to the `/signin` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/signin-page.webp){.potrait-img}