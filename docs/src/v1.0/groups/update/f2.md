---
aside: false
---

# Scenario 3.4. Update Group

## 3.4.F2. Update group fails when the user is not a group owner.

- `GIVEN` the user already logged in
- `GIVEN` the groups with `_id` `z` is exists
- `GIVEN` the user visits `/groups/z`
- `THEN` the user is redirected to the `/403` page

![alt text](https://absensi-docs.r2.lab.biz.id/403.webp){.potrait-img}