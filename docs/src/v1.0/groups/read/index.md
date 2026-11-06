---
prev:
  text: 'List Groups'
  link: '../list'
next:
  text: 'Update Group'
  link: '../update'
---

# Read Group

Displays group information and members.

- Path: `/groups/:id`

## Scenarios

| 3.3.S Success Scenarios |
| ---- |
| [3.3.S1. Read group succeeds.](./s1) |

| 3.3.F Failed Scenarios |
| ---- |
| [3.3.F1. Read group fails when the user is not authenticated.](./f1) |
| [3.3.F2. Read group fails when the user is not a group member.](./f2) |