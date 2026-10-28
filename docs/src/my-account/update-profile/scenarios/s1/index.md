---
aside: false
---

# Scenario 2.4. Update Profile

## 2.4.S1. User can update profile successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click profile button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu-profile.jpg){.shadow-img}

- `THEN` user redirected to update profile page

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/1.jpg){.shadow-img}

- `WHEN` user changes profile input from "admin" to "johndoe"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/3.jpg){.shadow-img}

- `THEN` user sees success notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/4.jpg){.shadow-img}