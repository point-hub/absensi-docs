---
aside: false
---

# Scenario 6.1. Read Attendance Report

## 6.1.S2. Read attendance report succeeds with user and period filters.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "report" button

![alt text](https://absensi-docs.r2.lab.biz.id/workhour-report/s1/report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/report` page
- `WHEN` the user clicks "attendance report" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s1/attendance-report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/attendance-report` page
- `WHEN` the user enters "October" in the month field
- `WHEN` the user enters "2026" in the year field
- `WHEN` the user enters "Budi Santoso" in the user field

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s2/filter.webp){.potrait-img}

- `THEN` the user sees filtered data

![alt text](https://absensi-docs.r2.lab.biz.id/attendance-report/s2/expected-result.webp){.potrait-img}