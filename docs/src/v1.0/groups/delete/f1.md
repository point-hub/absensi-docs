---
aside: false
---

# Scenario 3.5. Delete Group

## 3.5.F1. Delete group fails when the user is not authenticated.

- `GIVEN` the user visits `/groups/:id` without signing in
- `THEN` the user is redirected to the `/signin` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/signin-page.webp){.potrait-img}