# Groups

Group management features for organizing users.

## Group Ownership

When a user creates a new group, the user `_id` is stored in the `created_by_id` field in the database. This field identifies the **Group Owner**, who automatically becomes a member of the group upon creation.

The group owner is responsible for managing the group, including updating the group name, inviting and removing members.

## Features

| Feature | Description |
| --- | --- |
| [3.1. Create Group](/groups/create/) | Creates a new group. |
| [3.2. List Groups](/groups/list/) | Retrieves the list of groups available to the user. |
| [3.3. Read Group](/groups/read/) | Retrieves the details of a specific group. |
| [3.4. Update Group](/groups/update/) | Updates the details of an existing group. |
| [3.5. Delete Group](/groups/delete/) | Deletes an existing group. |
| [3.6. Invite User](/groups/invite-user/) | Invites a user to join a group using their email address. |
| [3.7. Accept Invitation](/groups/accept-invitation/) | Accepts an invitation to join a group. |
| [3.8. Reject Invitation](/groups/reject-invitation/) | Rejects an invitation to join a group. |
| [3.9. Remove User](/groups/remove-user/) | Removes a user from a group. |