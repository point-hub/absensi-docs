---
aside: false
---

# Scenario 3.5. Delete Group

## 3.5.F2. Delete group fails when the user is not the group owner.

- `GIVEN` the user already logged in
- `GIVEN` the groups with `_id` `z` is exists
- `GIVEN` the user visits `/groups/z`
- `THEN` the user is redirected to the `/403` page

![alt text](https://absensi-docs.r2.lab.biz.id/403.webp){.potrait-img}