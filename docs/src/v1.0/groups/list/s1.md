---
aside: false
---

# Scenario 3.2. List Groups

## 3.2.S1. List groups succeeds for owned groups.

- `GIVEN` the user already logged in
- `GIVEN` the user visits home page
- `WHEN` the user clicks "more" button

![alt text](https://absensi-docs.r2.lab.biz.id/my-account/update-password/s1/more-button.webp){.potrait-img}

- `THEN` the user sees the popup menu
- `WHEN` the user clicks "groups" button

![alt text](https://absensi-docs.r2.lab.biz.id/groups/create/s1/groups-button.webp){.potrait-img}

- `THEN` the user is redirected to the "groups" page
- `THEN` the user sees "GROUP A" in the name column

![alt text](https://absensi-docs.r2.lab.biz.id/groups/list/s1/expected-name.webp){.potrait-img}

- `THEN` the user sees "Admin" in the owner column

![alt text](https://absensi-docs.r2.lab.biz.id/groups/list/s1/expected-owner.webp){.potrait-img}
