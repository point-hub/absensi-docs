---
aside: false
---

# Scenario 3.5. Delete Group

## 3.5.S1. Delete group succeeds.

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

- `WHEN` the user clicks "delete" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/delete/s1/delete-button.webp){.potrait-img}

- `THEN` the user sees popup confirmation

![alt text](https://absensi-docs.r2.lab.biz.id/groups/delete/s1/delete-confirmation-popup.webp){.potrait-img}

- `WHEN` the user enters "Admin123!" in the password field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/delete/s1/fill-password.webp){.potrait-img}

- `WHEN` the user clicks "confirm" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/delete/s1/confirm-button.webp){.potrait-img}

- `THEN` the user redirected to the "/groups" page
- `THEN` the user sees success notification "Delete Group "GROUP A" success"

![alt text](https://absensi-docs.r2.lab.biz.id/groups/delete/s1/success-notification.webp){.potrait-img}

- `THEN` the user no longer sees "GROUP A" in the name column

![alt text](https://absensi-docs.r2.lab.biz.id/groups/delete/s1/expected-data.webp){.potrait-img}