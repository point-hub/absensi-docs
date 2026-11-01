---
aside: false
---

# Scenario 3.6. Invite User

## 3.6.F2. Invite user fails when the required field is empty.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "more" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/more-button.webp){.potrait-img}

- `THEN` the user sees the popup menu
- `WHEN` the user clicks "groups" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/groups-button.webp){.potrait-img}

- `THEN` the user is redirected to the "groups" page
- `WHEN` the user clicks "GROUP A" link in the name column

![alt text](https://absensi-docs.r2.lab.biz.id/groups/read/s1/choosen-group-link.webp){.potrait-img}

- `THEN` the user is redirected to the "/groups/:id" page
- `WHEN` the user clicks "invite" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/f2/invite-button.webp){.potrait-img}

- `THEN` the user sees error notification "Validation failed, Please check the highlighted fields."

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/f2/error-notification.webp){.potrait-img}

- `THEN` the user sees error message "The email field is required." in the email field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/f2/error-message.webp){.potrait-img}
