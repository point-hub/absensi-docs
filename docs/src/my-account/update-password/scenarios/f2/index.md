---
aside: false
---

# Scenario 2.3. Update Password

## 2.3.F2. Password update fails when required fields are empty.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click password button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/menu-password.jpg){.shadow-img}

- `THEN` user redirected to update password page

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.3/s1/1.jpg){.shadow-img}

- `WHEN` user clicks save button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.3/f2/1.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed, Please check the highlighted fields."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.3/f2/2.jpg){.shadow-img}

- `THEN` user sees error message "The current password field is required."
- `AND` user sees error message "The new password field is required."
- `AND` user sees error message "The password confirmation field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.3/f2/3.jpg){.shadow-img}