---
aside: false
---

# Scenario 2.3. Update Password

## 2.3.F3. Password update fails when password is not strong enough.

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

- `WHEN` user types "Admin123!" in the current password field
- `AND` user types "a" in the new password field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.3/f3/1.jpg){.shadow-img}

- `THEN` user sees error message "Use at least 8 characters"
- `AND` user sees error message "Contain at least one uppercase letter"
- `AND` user sees error message "Contain at least one numeric character"
- `AND` user sees error message "Contain at least one special character"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/my-account/1.2.3/f3/2.jpg){.shadow-img}