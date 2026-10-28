---
aside: false
---

# Scenario 2.1. Update Username

## 2.1.S1. User can update username successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click username button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu-username.jpg){.shadow-img}

- `THEN` user redirected to update username page

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/1.jpg){.shadow-img}

- `WHEN` user changes username input from "admin" to "johndoe"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/3.jpg){.shadow-img}

- `THEN` user sees success notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/s1/4.jpg){.shadow-img}