---
aside: false
prev:
  text: 'Signup | Failed 1'
  link: '../f1'
next:
  text: 'Signup | Failed 3'
  link: '../f3'
---

# Scenario 1.1. Signup

## 1.1.F2. Signup fails when username already exists.

- `GIVEN` user visit signup page

![alt text](./signup.png){.potrait-img}

- `WHEN` user type "admin" into input "username"
- `AND` user type "admin2@example.com" into input "email"
- `AND` user type "admin1234" into input "password"
- `AND` user type "admin1234" into input "confirm-password"
- `AND` user click button "sign-up"
- `THEN` user see "The username field already exists"

![alt text](./signup-username-exists.png){.potrait-img}

