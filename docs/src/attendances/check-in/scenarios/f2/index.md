---
aside: false
---

# Scenario 4.1. Check In

## 4.1.F2. Check in fails when the user has already checked in on the same day.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/f2/check-in-page.webp){.potrait-img}

- `GIVEN` the user sees "check-in" button is disabled
- `WHEN` the user clicks "check-in" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/f2/expected-bottom-bar.webp){.potrait-img}

- `THEN` the user sees error notification "You have already checked in today. You can only check in once per day."

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/f2/error-notification.webp){.potrait-img}

