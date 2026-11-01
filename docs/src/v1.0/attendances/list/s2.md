---
aside: false
---

# Scenario 4.5. List Attendances

## 4.5.S2. List attendances succeeds with user and period filters.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page

- `WHEN` the user enters "2026-10-30" in the date from field
- `WHEN` the user enters "2026-10-30" in the date to field
- `WHEN` the user enters "Jane" in the user field

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/list/s2/filter.webp){.potrait-img}

- `THEN` the user sees filtered data

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/list/s2/expected-result.webp){.potrait-img}