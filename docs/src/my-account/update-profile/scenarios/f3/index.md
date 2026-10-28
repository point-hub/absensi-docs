---
aside: false
---

# Scenario 2.4. Update Profile

## 2.4.F3. Profile update fails when profile already exists.

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

- `WHEN` user changes profile input from "admin" to "janedoe"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f3/2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f3/3.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed due to duplicate values."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f3/4.jpg){.shadow-img}

- `THEN` user sees error message "The profile field must be unique."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.1/f3/5.jpg){.shadow-img}