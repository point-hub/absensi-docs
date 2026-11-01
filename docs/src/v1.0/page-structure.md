# Page Structure

This page documents the application's page hierarchy, including each page's URL path, purpose, and navigation relationship. It provides an overview of how users navigate through the application.

## Page Hierarchy

```text
/ 
├── my-account 
│    ├── password 
│    └── profile
├── groups 
│    ├── create 
│    └── :id 
│        └── edit 
├── check-in 
├── check-out 
├── break-start
├── break-end
├── workhour-report
└── attendance-report
```

## Page Names

| Path | Page |
| --- | --- |
| `/` | Home Page |
| `/my-account` | My Account Page |
| `/my-account/password` | Update Password Page |
| `/my-account/profile` | Update Profile Page |
| `/groups` | List Groups Page |
| `/groups/create` | Create Group Page |
| `/groups/:id` | Group Details Page |
| `/groups/:id/edit` | Update Group Page |
| `/check-in` | Check In Page |
| `/check-out` | Check Out Page |
| `/break-start` | Break Start Page |
| `/break-end` | Break End Page |
| `/workhour-report` | Workhour Report Page |
| `/attendance-report` | Attendance Report Page |

## Notes

- The `:id` segment in group routes represents the unique identifier of a group.
- Group invitation actions, including inviting users, accepting or rejecting invitations, and removing members, are performed through group-related features and do not necessarily require separate pages.
