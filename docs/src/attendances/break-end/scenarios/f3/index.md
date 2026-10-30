---
aside: false
---

# Scenario 4.4. Break End

## 4.4.F3. Break end fails when the user has not captured a photo.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "break-end" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/break-end-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/break-end` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/break-end-page.webp){.potrait-img}

- `WHEN` the user clicks "request access camera" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/s1/request-access-camera-button.webp){.potrait-img}

- `WHEN` the user clicks "never allow" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-camera.webp){.potrait-img}

- `WHEN` the user clicks "break-end" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/f3/submit-break-end-button.webp){.potrait-img}

- `THEN` the user sees error notification "Break end success"

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/break-end/f3/error-notification.webp){.potrait-img}
