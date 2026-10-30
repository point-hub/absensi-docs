---
aside: false
---

# Scenario 4.2. Check Out

## 4.2.F5. Check out fails when the user has not captured a photo.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "check-out" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/check-out-button.webp){.potrait-img}

- `THEN` the user is redirected to the `/check-out` page

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/check-out-page.webp){.potrait-img}

- `WHEN` the user clicks "request access camera" button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/s1/request-access-camera-button.webp){.potrait-img}

- `WHEN` the user clicks "never allow" button

![alt text](https://absensi-docs.r2.lab.biz.id/request-permission-camera.webp){.potrait-img}

- `WHEN` the user clicks "check-out" submit button

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/f5/submit-check-out-button.webp){.potrait-img}

- `THEN` the user sees error notification "Please capture a selfie photo"

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/check-out/f5/error-notification.webp){.potrait-img}