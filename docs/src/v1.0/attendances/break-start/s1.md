---
aside: false
---

# Scenario 4.3. Break Start

## 4.3.S1. Break start succeeds.

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

- `WHEN` the user clicks "allow while visiting the site" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-location.webp){.potrait-img}

- `THEN` the user sees number from latitude and longitude text

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/lat-long.webp){.potrait-img}

- `WHEN` the user enters "start break" in the notes field

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/fill-notes.webp){.potrait-img}

- `WHEN` the user clicks "break-start" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/submit-break-start-button.webp){.potrait-img}

- `THEN` the user sees success notification "Break start success"

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/notification-success.webp){.potrait-img}

- `THEN` the user sees 1. the user's profile picture.
- `THEN` the user sees 1. the user's name.
- `THEN` the user sees 1. the recorded date and time.
- `THEN` the user sees 2. the break-start label.
- `THEN` the user sees 3. the captured selfie photo.
- `THEN` the user sees 4. the notes field.
- `THEN` the user sees 5. a map icon that links to google maps using the recorded latitude and longitude.

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/expected-data.webp){.potrait-img}

- `THEN` the user sees break-end button is active replacing break-start button
- `THEN` the user sees check-out button is disabled

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-start/s1/expected-bottom-menu.webp){.potrait-img}