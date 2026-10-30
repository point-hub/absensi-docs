---
aside: false
---

# Scenario 4.2. Check Out

## 4.2.S1. Check out succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "check-out" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/check-out-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/check-out` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/check-out-page.webp){.potrait-img}

- `WHEN` the user clicks "request access camera" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/request-access-camera-button.webp){.potrait-img}

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-camera.webp){.potrait-img}

- `WHEN` the user clicks "take selfie" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/take-selfie-button.webp){.potrait-img}

- `WHEN` the user clicks "request access location" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/request-access-location-button.webp){.potrait-img}

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-location.webp){.potrait-img}

- `THEN` the user sees number from latitude and longitude text

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/lat-long.webp){.potrait-img}

- `WHEN` the user enters "start working" in the notes field

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/fill-notes.webp){.potrait-img}

- `WHEN` the user clicks "check-out" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/submit-check-out-button.webp){.potrait-img}

- `THEN` the user sees success notification "Sign out success"

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/success-notification.webp){.potrait-img}

- `THEN` the user sees 1. the user's profile picture.
- `THEN` the user sees 1. the user's name.
- `THEN` the user sees 1. the recorded date and time.
- `THEN` the user sees 2. the check-out label.
- `THEN` the user sees 3. the captured selfie photo.
- `THEN` the user sees 4. the notes field.
- `THEN` the user sees 5. a map icon that links to google maps using the recorded latitude and longitude.

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/expected-data.webp){.potrait-img}

- `THEN` the user sees break-start button is disabled
- `THEN` the user sees check-in button is disabled replacing check-out button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/expected-bottom-bar.webp){.potrait-img}