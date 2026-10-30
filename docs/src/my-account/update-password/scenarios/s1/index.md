---
aside: false
---

# Scenario 2.1. Update Password

## 2.1.S1. Update password succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "more" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/more-button.webp){.potrait-img}

- `THEN` the user sees the popup menu
- `WHEN` the user clicks "my account" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/my-account-button.webp){.potrait-img}

- `THEN` the user is redirected to the "my account" page
- `WHEN` the user clicks "password" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/password-button.webp){.potrait-img}

- `THEN` the user is redirected to the "update password" page
- `WHEN` the user enters "Admin123!" in the current password field 
- `WHEN` the user enters "Admin123@" in the new password field 
- `WHEN` the user enters "Admin123@" in the confirm password field 

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/fill-form.webp){.potrait-img}

- `WHEN` the user clicks "save" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/save-button.webp){.potrait-img}

- `THEN` the user sees success notification "Update success"

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/update-success-notification.webp){.potrait-img}

- `THEN` the user sees empty form

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/clear-form.webp){.potrait-img}
