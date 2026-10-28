# Update Group

Allows group owners to update group information.

- Path: `/groups/:id/edit`

## Scenarios

| 3.4.S Success Scenarios |
| ---- |
| [3.4.S1. Group owner can update group information successfully.](/groups/edit/scenarios/s1/) |

| 3.4.F Failed Scenarios |
| ---- |
| [3.4.F1. Edit group fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.4.F2. Edit group fails when the user is not a group owner.](/groups/edit/scenarios/f2/) |
| [3.1.F3. Edit group fails when the group name is empty.](/groups/create/scenarios/f3/) |
| [3.4.F4. Edit group fails when the group name already exists.](/groups/edit/scenarios/f4/) |