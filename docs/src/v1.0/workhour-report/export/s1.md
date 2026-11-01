---
aside: false
---

# Scenario 5.2. Export Workhour Report

## 5.2.S1. Export workhour report succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "report" button

![alt text](https://absensi-docs.r2.lab.biz.id/workhour-report/s1/report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/report` page
- `WHEN` the user clicks "workhour report" button

![alt text](https://absensi-docs.r2.lab.biz.id/workhour-report/s1/workhour-report-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/workhour-report` page
- `WHEN` the user clicks "export" button

![alt text](https://absensi-docs.r2.lab.biz.id/workhour-report/s1/export-button.webp){.potrait-img}

- `THEN` the user download csv file