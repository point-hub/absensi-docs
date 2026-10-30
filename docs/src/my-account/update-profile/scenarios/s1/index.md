---
aside: false
---

# Scenario 2.2. Update Profile

## 2.2.S1. User can update profile successfully.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "more" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/more-button.webp){.potrait-img}

- `THEN` the user sees the popup menu
- `WHEN` the user clicks "my account" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/my-account-button.webp){.potrait-img}

- `THEN` the user is redirected to the "my account" page
- `WHEN` the user clicks "profile" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-profile/s1/profile-button.webp){.potrait-img}

- `THEN` the user is redirected to the "update profile" page
- `WHEN` the user changes profile picture

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-profile/s1/photo.webp){.potrait-img}

::: info
The user can update their profile picture by clicking it and selecting a photo from their device. The profile picture is updated immediately after the photo is selected, without requiring the user to click a save button.
:::

- `THEN` the user sees success notification "Update success"

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-profile/s1/success-notification.webp){.potrait-img}
