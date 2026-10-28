---
aside: false
---

# Scenario 2.1. Update Username

## 2.1.F2. Username update fails when required fields are empty.

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

- `WHEN` user clears username input

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f2/2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f2/3.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed, Please check the highlighted fields."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f2/4.jpg){.shadow-img}

- `THEN` user sees error message "The username field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f2/5.jpg){.shadow-img}