---
aside: false
---

# Scenario 6.1. Read Attendance Report

## 6.1.S1. Read attendance report succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "report" button

![alt text](https://absensi-docs.r2.lab.biz.id/workhour-report/s1/report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/report` page
- `WHEN` the user clicks "attendance report" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s1/attendance-report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/attendance-report` page
- `THEN` the user sees unfiltered data

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s1/expected-result.webp){.potrait-img}