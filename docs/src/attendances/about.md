# About Attendances

The Attendance feature allows users to record their daily work activities by checking in when they start work, checking out when they finish work, and recording break start and break end times. Each attendance action can include a photo, location information, and notes to provide supporting details. This feature helps users maintain accurate attendance records and track their working hours and breaks.

![alt text](https://absensi-docs.r2.lab.biz.id/attendances/attendance-workflow.png)

**Rules**

- `check-in` and `check-out` can each be performed only once per day.
- `check-out` can only be performed if the user has already checked in on the same day.
- `check-out` can only be performed if the user has no active break (i.e., every started break has been ended).
- `break-start` and `break-end` can be performed multiple times per day.
- `break-start` can only be performed if the user has already checked in on the same day.
- `break-start` can only be performed if the user has not checked out yet.
- `break-start` can only be performed if the user has no active break (i.e., every started break has been ended).
- `break-end` can only be performed if the user has an active break on the same day.

## Features

| Feature | Description |
| ------- | ----------- |
| [Check In](/attendances/check-in/) | Records the user's check-in time, location, photo, and optional notes. |
| [Check Out](/attendances/check-out/) | Records the user's check-out time, location, photo, and optional notes. |
| [Break Start](/attendances/break-start/) | Records the start of a break, including the time, location, photo, and optional notes. |
| [Break End](/attendances/break-end/) | Records the end of a break, including the time, location, photo, and optional notes. |