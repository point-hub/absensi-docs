---
prev:
  text: 'Read Group'
  link: '../read'
next:
  text: 'Delete Group'
  link: '../delete'
---

# Update Group

Allows group owners to update group information.

- Path: `/groups/:id/edit`

## Scenarios

| 3.4.S Success Scenarios |
| ---- |
| [3.4.S1. Update group succeeds.](./s1) |

| 3.4.F Failed Scenarios |
| ---- |
| [3.4.F1. Update group fails when the user is not authenticated.](./f1) |
| [3.4.F2. Update group fails when the user is not a group owner.](./f2) |
| [3.4.F3. Update group fails when the group name is empty.](./f3) |
| [3.4.F4. Update group fails when the group name already exists.](./f4) |