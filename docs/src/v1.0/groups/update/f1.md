---
aside: false
---

# Scenario 3.4. Update Group

## 3.4.F1. Update group fails when the user is not authenticated.

- `GIVEN` the user visits `/groups/:id/edit` without signing in
- `THEN` the user is redirected to the `/signin` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/signin-page.webp){.potrait-img}