---
aside: false
---

# Attendances

The Attendance feature allows users to record their daily work activities by checking in when they start work, checking out when they finish work, and recording away and return times. 

Each attendance action can include a photo, location information, and notes to provide supporting details. This feature helps users maintain accurate attendance records and track their working hours and leaves.

## Workflow

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/attendance-workflow.webp){.landscape-img}

## Rules

- `check-in` and `check-out` can each be performed only once per day.
- `check-out` can only be performed if the user has already checked in on the same day.
- `check-out` can only be performed if the user has no active away (i.e., every away has been returned).
- `away` and `return` can be performed multiple times per day.
- `away` can only be performed if the user has already checked in on the same day.
- `away` can only be performed if the user has not checked out yet.
- `away` can only be performed if the user has no active away (i.e., every away has been returned).
- `return` can only be performed if the user has an active away on the same day.

## Attendance Error Messages

### Check In

| Scenario | Error notification |
| --- | --- |
| **4.1.F2.** User has already checked in. | You have already checked in today. You can only check in once per day. |

### Check Out

| Scenario | Error notification |
| --- | --- |
| **4.2.F2.** User has not checked in. | You must check in before you can check out. |
| **4.2.F3.** User has already checked out. | You have already checked out today. |
| **4.2.F4.** User has an active away that has not ended. | You must end your active away before you can check out. |

### Away

| Scenario | Error notification |
| --- | --- |
| **4.3.F2.** User has not checked in. | You must check in before going away. |
| **4.3.F3.** User has already checked out. | You cannot going away after checking out. |
| **4.3.F4.** A previous away period is still active. | You already have an active away. Please return before leaving again. |

### Return

| Scenario | Error notification |
| --- | --- |
| **4.4.F2.** There is no active away. | You don't have an active away to end. |

## Features

| Feature | Description |
| ------- | ----------- |
| [4.1. Check In](./check-in/) | Records the user's check-in time, location, photo, and optional notes. |
| [4.2. Check Out](./check-out/) | Records the user's check-out time, location, photo, and optional notes. |
| [4.3. Away](./away/) | Records the away time, location, photo, and optional notes. |
| [4.4. Return](./return/) | Records the return time, location, photo, and optional notes. |
| [4.5. List Attendances](./list/) | Displays attendance records for homepage. |
