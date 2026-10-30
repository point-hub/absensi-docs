---
aside: false
---

# Scenario 4.4. Break End

## 4.4.S1. Break end succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "break-end" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/break-end-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/break-end` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/break-end-page.webp){.potrait-img}

- `WHEN` the user clicks "request access camera" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/request-access-camera-button.webp){.potrait-img}

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-camera.webp){.potrait-img}

- `WHEN` the user clicks "take selfie" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/take-selfie-button.webp){.potrait-img}

- `WHEN` the user clicks "request access location" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/request-access-location-button.webp){.potrait-img}

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-location.webp){.potrait-img}

- `THEN` the user sees number from latitude and longitude text

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/lat-long.webp){.potrait-img}

- `WHEN` the user enters "end break" in the notes field

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/fill-notes.webp){.potrait-img}

- `WHEN` the user clicks "break-end" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/submit-break-end-button.webp){.potrait-img}

- `THEN` the user sees success notification "Break end success"

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/success-notification.webp){.potrait-img}

- `THEN` the user sees 1. the user's profile picture.
- `THEN` the user sees 1. the user's name.
- `THEN` the user sees 1. the recorded date and time.
- `THEN` the user sees 2. the break-end label.
- `THEN` the user sees 3. the captured selfie photo.
- `THEN` the user sees 4. the notes field.
- `THEN` the user sees 5. a map icon that links to google maps using the recorded latitude and longitude.

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/expected-data.webp){.potrait-img}

- `THEN` the user sees break-start button
- `THEN` the user sees check-out button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/expected-bottom-bar.webp){.potrait-img}