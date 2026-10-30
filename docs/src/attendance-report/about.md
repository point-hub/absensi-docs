# Attendance Report

The attendance report records users' attendance activities, including check-in, check-out, and break-start, break-end activities. Each row represents one attendance action performed by the user.

## Attendance Report Requirement

The attendance report must include the following fields:

| Field | Description |
| --- | --- |
| Date | The date when the attendance action occurred, formatted as `YYYY-MM-DD`. |
| Day | The day of the week corresponding to the date. |
| User | The name of the employee who performed the action. |
| Action | The type of attendance action: Check In, Break Start, Break End, or Check Out. |
| Time | The time when the action was recorded, displayed in 24-hour format (`HH:mm`). |
| Photo | The photo captured when the employee performed the action. |
| Location | The location recorded for the attendance action. |
| Notes | Additional information about the attendance action, such as the reason for breaks. |

## Reporting Rules

- Records should be ordered by date and time, from earliest to latest.
- If an employee has no attendance action on a date, no action row is generated for that date.
- The Date, Day, and Time fields are derived from the timestamp recorded when the attendance action (check-in, check-out, break-start, break-end) is performed.

## Report Data Example

| Date | Day | User | Action | Time | Photo | Location | Notes |
| --- | --- | --- | --- | :---: | --- | --- | --- |
| 2026-01-01 | Thursday | John Doe | Check In | 08:00 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Started work |
| 2026-01-01 | Thursday | John Doe | Break Start | 10:00 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Break 1 started |
| 2026-01-01 | Thursday | John Doe | Break End | 10:15 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Break 1 ended |
| 2026-01-01 | Thursday | John Doe | Break Start | 12:00 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Break 2 started |
| 2026-01-01 | Thursday | John Doe | Break End | 13:00 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Break 2 ended |
| 2026-01-01 | Thursday | John Doe | Break Start | 15:00 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Break 3 started |
| 2026-01-01 | Thursday | John Doe | Break End | 15:15 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Break 3 ended |
| 2026-01-01 | Thursday | John Doe | Check Out | 16:00 | [https://placehold.co/600x400](https://placehold.co/600x400) | [7.2575, 112.7521](https://www.google.com/maps?q=7.2575%2C112.7521) | Finished work |

## Features

| Feature | Description |
| --- | --- |
| [6.1. Read](/attendance-report/read/) | Retrieves the work hour report, including recorded attendance times and calculated working hours. |
| [6.2. Export](/attendance-report/export/) | Exports the work hour report for external use or record-keeping. |