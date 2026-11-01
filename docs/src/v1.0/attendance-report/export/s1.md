---
aside: false
---

# Scenario 5.2. Export Attendance Report

## 5.2.S1. Export attendance report succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "report" button

![alt text](https://absensi-docs.r2.lab.biz.id/workhour-report/s1/report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/report` page
- `WHEN` the user clicks "attendance report" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s1/attendance-report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/attendance-report` page
- `WHEN` the user clicks "export" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s1/export-button.webp){.potrait-img}

- `THEN` the user download csv file