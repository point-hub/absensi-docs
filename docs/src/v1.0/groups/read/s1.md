---
aside: false
---

# Scenario 3.3. Read Group

## 3.3.S1. Read group succeeds.

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

- `THEN` the user sees "Admin" in the users name column

![alt text](https://absensi-docs.r2.lab.biz.id/groups/read/s1/expected-member.webp){.potrait-img}
