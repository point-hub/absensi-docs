---
aside: false
---

# Scenario 2.1. Update Password

## 2.1.F3. Update password fails when password is not strong enough.

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
- `WHEN` the user enters "a" in the new password field
- `THEN` the user sees error message "Use at least 8 characters"
- `THEN` the user sees error message "Contain at least one uppercase letter"
- `THEN` the user sees error message "Contain at least one numeric character"
- `THEN` the user sees error message "Contain at least one special character"

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/f3/fill-form.webp){.potrait-img}
