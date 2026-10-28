---
aside: false
---

# Scenario 2.2. Update Email

## 2.2.S1. User can update email successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click email button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu-email.jpg){.shadow-img}

- `THEN` user redirected to update email page

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/1.jpg){.shadow-img}

- `WHEN` user changes email input from "admin@example.com" to "johndoe@example.com"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/3.jpg){.shadow-img}

- `THEN` user sees popup password confirmation

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/4.jpg){.shadow-img}

- `WHEN` user types "Admin123!" in the password input

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/5.jpg){.shadow-img}

- `WHEN` user clicks confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/6.jpg){.shadow-img}

- `THEN` user sees success notification "Update success, Until verification is completed, your account will continue to use your existing email address."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/7.jpg){.shadow-img}