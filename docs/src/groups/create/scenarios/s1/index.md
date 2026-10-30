---
aside: false
---

# Scenario 3.1. Create Group

## 3.1.S1. Create group succeeds.

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

- `WHEN` the user enters "GROUP B" in the name field 

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/fill-form.webp){.potrait-img}

- `WHEN` the user clicks "save" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/save-button.webp){.potrait-img}

- `THEN` the user redirected to the "/groups/:id" page
- `THEN` the user sees success notification "Create success"

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/success-notification.webp){.potrait-img}

- `THEN` the user sees "GROUP B" in the group name field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/expected-name.webp){.potrait-img}

- `THEN` the user sees "Admin" in the users name field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/expected-member-name.webp){.potrait-img}

- `THEN` the user sees "ACTIVE" in the users status field

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/expected-member-status.webp){.potrait-img}

- `THEN` the user sees "GROUP B" in the active group header

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/expected-active-group.webp){.potrait-img}
