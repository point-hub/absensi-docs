---
aside: false
---

# Scenario 3.1. Create Group

## 3.1.F1. Create group fails when the user is not authenticated.

- `GIVEN` the user visits `/groups/create` without signing in
- `THEN` the user is redirected to the `/signin` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/signin-page.webp){.potrait-img}