---
aside: false
---

# Scenario 3.4. Update Group

## 3.4.S1. Update group succeeds.

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

- `WHEN` the user click "edit" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/update/s1/edit-button.webp){.potrait-img}

- `THEN` the user is redirected to the "/groups/:id/edit" page

![alt text](https://absensi-docs.r2.lab.biz.id/groups/update/s1/update-group-page.webp){.potrait-img}

- `WHEN` the user changes the name field from "GROUP A" to "MY COMPANY"

![alt text](https://absensi-docs.r2.lab.biz.id/groups/update/s1/fill-form.webp){.potrait-img}

- `WHEN` the user click "update" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/update/s1/update-button.webp){.potrait-img}

- `THEN` the user redirected to the "/groups/:id" page
- `THEN` the user sees success notification "Update success"

![alt text](https://absensi-docs.r2.lab.biz.id/groups/update/s1/success-notification.webp){.potrait-img}

- `THEN` the user sees "MY COMPANY" in the name field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/update/s1/expected-name.webp){.potrait-img}
