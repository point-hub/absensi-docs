---
aside: false
---

# Attendances

The Attendance feature allows users to record their daily work activities by checking in when they start work, checking out when they finish work, and recording break start and break end times. 

Each attendance action can include a photo, location information, and notes to provide supporting details. This feature helps users maintain accurate attendance records and track their working hours and breaks.

## Workflow

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/attendance-workflow.webp){.landscape-img}

## Rules

- `check-in` and `check-out` can each be performed only once per day.
- `check-out` can only be performed if the user has already checked in on the same day.
- `check-out` can only be performed if the user has no active break (i.e., every started break has been ended).
- `break-start` and `break-end` can be performed multiple times per day.
- `break-start` can only be performed if the user has already checked in on the same day.
- `break-start` can only be performed if the user has not checked out yet.
- `break-start` can only be performed if the user has no active break (i.e., every started break has been ended).
- `break-end` can only be performed if the user has an active break on the same day.

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
| **4.2.F4.** User has an active break that has not ended. | You must end your active break before you can check out. |

### Break Start

| Scenario | Error notification |
| --- | --- |
| **4.3.F2.** User has not checked in. | You must check in before starting a break. |
| **4.3.F3.** User has already checked out. | You cannot start a break after checking out. |
| **4.3.F4.** A previous break is still active. | You already have an active break. Please end it before starting another break. |

### Break End

| Scenario | Error notification |
| --- | --- |
| **4.4.F2.** There is no active break. | You don't have an active break to end. |

## Features

| Feature | Description |
| ------- | ----------- |
| [4.1. Check In](/attendances/check-in/) | Records the user's check-in time, location, photo, and optional notes. |
| [4.2. Check Out](/attendances/check-out/) | Records the user's check-out time, location, photo, and optional notes. |
| [4.3. Break Start](/attendances/break-start/) | Records the start of a break, including the time, location, photo, and optional notes. |
| [4.4. Break End](/attendances/break-end/) | Records the end of a break, including the time, location, photo, and optional notes. |
| [4.5. List Attendances](/attendances/list/) | Displays attendance records for homepage. |
