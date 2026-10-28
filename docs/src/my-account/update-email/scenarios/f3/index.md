---
aside: false
---

# Scenario 2.2. Update Email

## 2.2.F3. Email update fails when email already exists.

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

- `WHEN` user changes email input from "admin@example.com" to "janedoe@example.com"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/f2/2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/f2/3.jpg){.shadow-img}

- `THEN` user sees popup password confirmation

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/4.jpg){.shadow-img}

- `WHEN` user types "Admin123!" in the password input

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/5.jpg){.shadow-img}

- `WHEN` user clicks confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/s1/6.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed due to duplicate values."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/f2/7.jpg){.shadow-img}

- `THEN` user sees error message "The email field must be unique."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.2/f2/8.jpg){.shadow-img}