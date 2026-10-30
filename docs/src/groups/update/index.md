# Update Group

Allows group owners to update group information.

- Path: `/groups/:id/edit`

## Scenarios

| 3.4.S Success Scenarios |
| ---- |
| [3.4.S1. Update group succeeds.](/groups/update/scenarios/s1/) |

| 3.4.F Failed Scenarios |
| ---- |
| [3.4.F1. Update group fails when the user is not authenticated.](/groups/update/scenarios/f1/) |
| [3.4.F2. Update group fails when the user is not a group owner.](/groups/update/scenarios/f2/) |
| [3.1.F3. Update group fails when the group name is empty.](/groups/update/scenarios/f3/) |
| [3.4.F4. Update group fails when the group name already exists.](/groups/update/scenarios/f4/) |