---
aside: false
---

# Scenario 4.3. Break Start

## 4.3.F6. Break start fails when the user's GPS latitude and longitude cannot be determined.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "break-start" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/break-start-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/break-start` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/break-start-page.webp){.potrait-img}

- `WHEN` the user clicks "request access camera" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/request-access-camera-button.webp){.potrait-img}

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-camera.webp){.potrait-img}

- `WHEN` the user clicks "take selfie" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/take-selfie-button.webp){.potrait-img}

- `WHEN` the user clicks "request access location" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/request-access-location-button.webp){.potrait-img}

- `WHEN` the user clicks "never allow" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-location.webp){.potrait-img}

- `WHEN` the user clicks "break-start" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/f5/submit-break-start-button.webp){.potrait-img}

- `THEN` the user sees error notification "Please enable GPS / location services."

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/f6/error-notification.webp){.potrait-img}