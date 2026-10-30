---
aside: false
---

# Scenario 3.9. Remove User

## 3.9.S1. Remove user succeeds.

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
- `WHEN` the user click delete button in the "John Doe" row

![alt text](https://absensi-docs.r2.lab.biz.id/groups/remove-user/s1/delete-button.webp){.potrait-img}

- `THEN` the user is sees the confirmation popup

![alt text](https://absensi-docs.r2.lab.biz.id/groups/remove-user/s1/remove-confirmation-popup.webp){.potrait-img}

- `WHEN` the user enters "Admin123!" in the password field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/remove-user/s1/fill-password.webp){.potrait-img}

- `WHEN` the user clicks "confirm" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/remove-user/s1/confirm-button.webp){.potrait-img}

- `THEN` the user sees success notification "Delete User "John Doe" success"

![alt text](https://absensi-docs.r2.lab.biz.id/groups/remove-user/s1/success-notification.webp){.potrait-img}

- `THEN` the user no longer sees "John Doe" in the users table

![alt text](https://absensi-docs.r2.lab.biz.id/groups/remove-user/s1/expected-data.webp){.potrait-img}
