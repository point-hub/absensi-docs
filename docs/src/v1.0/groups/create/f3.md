---
aside: false
---

# Scenario 3.1. Create Group

## 3.1.F3. Create group fails when the group name already exists.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "more" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/more-button.webp){.potrait-img}

- `THEN` the user sees the popup menu
- `WHEN` the user clicks "groups" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/groups-button.webp){.potrait-img}

- `THEN` the user is redirected to the "groups" page
- `WHEN` the user clicks "create" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/create-button.webp){.potrait-img}

- `THEN` the user is redirected to the "create group" page

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/create-group-page.webp){.potrait-img}

- `WHEN` the user enters "GROUP A" in the name field 

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/f3/fill-form.webp){.potrait-img}

- `WHEN` the user clicks "save" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/f3/save-button.webp){.potrait-img}

- `THEN` the user redirected to the "/groups/:id" page
- `THEN` the user sees error notification "Validation failed due to duplicate values."

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/f3/error-notification.webp){.potrait-img}

- `THEN` the user sees error message "The name field must be unique." in the name field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/f3/error-message.webp){.potrait-img}

