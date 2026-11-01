---
aside: false
---

# Scenario 2.1. Update Password

## 2.1.F4. Update password fails when password confirmation doesn't match.

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
- `WHEN` user types "Admin123!" in the current password field
- `WHEN` user types "Admin123@" in the new password field
- `WHEN` user types "ZzZzZ123#" in the confirm password field
- `THEN` user sees error message "Password doesn't match"

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/f4/fill-form.webp){.potrait-img}
