---
aside: false
---

# Scenario 6.2. Attendance Report

## 6.2.F1. Export attendance report fails when the user is not authenticated.

- `GIVEN` the user visits `/attendance-report` without signing in
- `THEN` the user is redirected to the `/signin` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/signin-page.webp){.potrait-img}