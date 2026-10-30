---
aside: false
---

# Scenario 3.7. Accept Invitation

## 3.7.S1. Accept invitation succeeds.

- `GIVEN` the user already logged in
- `GIVEN` the user has received an invitation email.
- `GIVEN` the user clicks "accept invitation" button

```
Hi johndoe@example.com,

You have been invited to join the group **GROUP A**.

Please choose one of the following options:

**[Accept Invitation]**

**[Reject Invitation]**

If you don't have an account yet, you'll be asked to create one before accepting the invitation.

If you weren't expecting this invitation, you can safely ignore this email.

Best regards,  
Absensi Team
```

- `GIVEN` the user is redirected to the `/` page
- `THEN` the user sees "GROUP A" in the page header

![alt text](https://absensi-docs.r2.lab.biz.id/groups/accept-invitation/s1/expected-group.webp){.potrait-img}
