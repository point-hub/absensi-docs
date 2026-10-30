# Workhour Report

Generate workhour reports showing each user’s working duration, break durations and net working time.

## Workhour Report Requirements

The workhour report must include the following fields:

| Field | Description |
| --- | --- |
| Date | The report date in `YYYY-MM-DD` format. |
| Day | The day of the week for the corresponding date. |
| User | The employee's name. |
| Check In | The employee's check-in time. |
| Check Out | The employee's check-out time. |
| Working Duration | The duration between check-in and check-out, excluding no breaks. |
| Break Durations | The total duration of all breaks recorded on that date. |
| Net Working Time | Working duration minus break duration. |

### Reporting Rules

- The report must include every calendar date in the selected month, from the first day to the last day.
- Each date must have a row for every employee included in the report.
- If an employee has no check-in record on a particular date, the row must still be included, with the fields left empty.
- Durations must be displayed in hours.

### Calculation Formulas

#### 1. Working Duration

The total time between check-in and check-out.

```
Working Duration = Check Out − Check In
```

Example

| Date |	Day	| Check In |	Check Out | Working Duration |
| --- | --- | --- | --- | --- |
| 2026-01-01 | Thursday | 08:00 | 16:00 | 8 hours |

#### 2. Break Durations

The total duration of all breaks recorded by the user during the day.

```
Break Durations = Σ (Break End − Break Start)
```

Example

| # |	Break Start	| Break End |	Break Duration |
| --- | --- | --- | --- |
| 1 | 10:00 | 10:15 | 0.25 hours |
| 2 | 12:00 | 13:00 | 1 hours |
| 3 | 15:00 | 15:15 | 0.25 hours |
| | | Break Durations | 1.5 hours |

#### 3. Net Working Time

The working duration minus the total break duration.

```
Net Working Time = Working Duration − Break Durations
```

| Date | Day | User | Check In | Check Out | Working Duration | Break Durations | Net Working Time |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| 2026-01-01 | Thursday | John Doe | 08:00 | 16:00 | 8.0 | 1.5 | 6.5 |

### Report Data Example

| Date | Day | User | Check In | Check Out | Working Duration | Break Durations | Net Working Time |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| 2026-01-01 | Thursday | John Doe | 08:00 | 16:00 | 8.0 | 1.5 | 6.5 |
| 2026-01-02 | Friday | John Doe | 08:05 | 17:00 | 8.92 | 1.0 | 7.92 |
| 2026-01-03 | Saturday | John Doe |  |  |  |  |  |
| 2026-01-04 | Sunday | John Doe |  |  |  |  |  |
| 2026-01-05 | Monday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-06 | Tuesday | John Doe | 08:10 | 17:10 | 9.0 | 1.0 | 8.0 |
| 2026-01-07 | Wednesday | John Doe | 08:00 | 16:30 | 8.5 | 0.5 | 8.0 |
| 2026-01-08 | Thursday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-09 | Friday | John Doe | 08:15 | 17:00 | 8.75 | 0.75 | 8.0 |
| 2026-01-10 | Saturday | John Doe |  |  |  |  |  |
| 2026-01-11 | Sunday | John Doe |  |  |  |  |  |
| 2026-01-12 | Monday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-13 | Tuesday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-14 | Wednesday | John Doe | 08:20 | 17:00 | 8.67 | 0.67 | 8.0 |
| 2026-01-15 | Thursday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-16 | Friday | John Doe | 08:00 | 16:00 | 8.0 | 1.0 | 7.0 |
| 2026-01-17 | Saturday | John Doe |  |  |  |  |  |
| 2026-01-18 | Sunday | John Doe |  |  |  |  |  |
| 2026-01-19 | Monday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-20 | Tuesday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-21 | Wednesday | John Doe | 08:10 | 17:10 | 9.0 | 1.0 | 8.0 |
| 2026-01-22 | Thursday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-23 | Friday | John Doe | 08:00 | 16:30 | 8.5 | 0.5 | 8.0 |
| 2026-01-24 | Saturday | John Doe |  |  |  |  |  |
| 2026-01-25 | Sunday | John Doe |  |  |  |  |  |
| 2026-01-26 | Monday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-27 | Tuesday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-28 | Wednesday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-29 | Thursday | John Doe | 08:00 | 17:00 | 9.0 | 1.0 | 8.0 |
| 2026-01-30 | Friday | John Doe | 08:00 | 16:00 | 8.0 | 1.0 | 7.0 |
| 2026-01-31 | Saturday | John Doe |  |  |  |  |  |

## Features

| Feature | Description |
| ------- | ----------- |
| [5.1. Read](/workhour-report/read/) | Retrieves the work hour report, including recorded attendance times and calculated working hours. |
| [5.2. Export](/workhour-report/export/) | Exports the work hour report for external use or record-keeping. |
