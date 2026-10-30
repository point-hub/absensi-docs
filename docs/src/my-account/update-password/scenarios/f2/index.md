---
aside: false
---

# Scenario 2.3. Update Password

## 2.3.F2. Update password fails when required fields are empty.


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
- `WHEN` the user clicks "save" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/f2/save-button.webp){.potrait-img}

- `THEN` user sees error notification "Validation failed, Please check the highlighted fields."

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/f2/error-notification.webp){.potrait-img}

- `THEN` user sees error message "The current password field is required."
- `THEN` user sees error message "The new password field is required."
- `THEN` user sees error message "The confirm password field is required."

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/f2/error-message.webp){.potrait-img}