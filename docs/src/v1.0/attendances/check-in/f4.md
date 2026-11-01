---
aside: false
---

# Scenario 4.1. Check In

## 4.1.F4. Check in fails when the user's GPS latitude and longitude cannot be determined.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "check-in" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/s1/check-in-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/check-in` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/s1/check-in-page.webp){.potrait-img}

- `WHEN` the user clicks "request access camera" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/s1/request-permission-camera-button.webp){.potrait-img}

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-camera.webp){.potrait-img}

- `WHEN` the user clicks "take selfie" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/s1/take-selfie-button.webp){.potrait-img}

- `WHEN` the user clicks "request access location" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/s1/request-permission-location-button.webp){.potrait-img}

- `WHEN` the user clicks "never allow" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-location.webp){.potrait-img}

- `WHEN` the user clicks "check-in" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/f3/submit-check-in-button.webp){.potrait-img}

- `THEN` the user sees error notification "Please enable GPS / location services."

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-in/f4/error-notification.webp){.potrait-img}
