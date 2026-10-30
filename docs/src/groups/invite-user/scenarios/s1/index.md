---
aside: false
---

# Scenario 3.6. Invite User

## 3.6.S1. Invite user succeeds.

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
- `THEN` the user sees "GROUP A" in the name field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/read/s1/expected-name.webp){.potrait-img}

- `WHEN` the user enters "johndoe@example.com" in the email field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/s1/fill-email.webp){.potrait-img}

- `WHEN` the user clicks "invite" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/s1/invite-button.webp){.potrait-img}

- `THEN` the user sees success notification "User invited successfully. An invitation email has been sent with instructions to accept the invitation and join the group."

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/s1/success-notification.webp){.potrait-img}

- `THEN` the user sees "johndoe@example.com" in the name column
- `THEN` the user sees "pending" in the status column

![alt text](https://absensi-docs.r2.lab.biz.id/groups/invite-user/s1/expected-data.webp){.potrait-img}
