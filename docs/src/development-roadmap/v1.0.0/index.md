---
outline: [2,3]
---

<script setup>
import Sitemap from '../../sitemap.vue'
</script>

# v1.0.0 - Initial Release

## SMART Goals

**Specific:** 

Develop a web application that records user check-in and check-out times, as well as break durations in real time, enabling accurate tracking of overtime and undertime hours.

**Measurable:** 

- Allow users to create groups and invite others to join.
- Record working hours (check-in, check-out), and break times (break-start, break-end), along with the user's photo and GPS coordinates (latitude and longitude) for each activity.
- Generate workhour reports showing each user’s working duration, break durations and net working time.
- Generate attendance reports that include each user’s photo and GPS location for every activity (check-in, check-out, break-start, break-end), enabling user to verify attendance records when needed.
- Support access and usage on both Android and iOS devices through a responsive web application.

**Achievable:**

- The application can be developed using established web technologies and location-based services. 
- Features such as attendance recording, break tracking, GPS location capture, group management, and overtime/undertime calculation can be implemented using readily available frameworks and infrastructure within the project's scope.

**Relevant:**

The application provides a reliable audit trail of user attendance and working hours by recording check-in, check-out, break activities, and location data in real time. This ensures that attendance records can be verified and reviewed when needed, improving data accuracy, accountability, and compliance with organizational policies.

**Time Bound:**

October 2026

## Sitemap

<div style="width:100%;overflow: scroll;margin-top:24px;background:white;padding:12px"> 
  <Sitemap />
</div>

## 1. Auth

User authentication and access control features to secure the application.

### 1.1. Signup

Allows new users to create an account using email and password.

- Path: `/signup`

**Scenarios:**

| 1.1.S Success Scenarios |
| ---- |
| [1.1.S1. Signup succeeds.](/auth/signup/scenarios/s1/) |

| 1.1.F Failed Scenarios |
| --- |
| [1.1.F1. Signup fails when required fields are empty.](/auth/signup/scenarios/f1/) |
| [1.1.F2. Signup fails when username already exists.](/auth/signup/scenarios/f2/) |
| [1.1.F3. Signup fails when email already exists.](/auth/signup/scenarios/f3/) |
| [1.1.F4. Signup fails when password is not strong enough.](/auth/signup/scenarios/f4/) |
| [1.1.F5. Signup fails when password confirmation doesn't match.](/auth/signup/scenarios/f5/) |

### 1.2. Verify Email

Sends a verification email to confirm the user's email address.

- Path: `/verify-email`

**Scenarios:**

| 1.2.S Success Scenarios |
| ---- |
| [1.2.S1. Verify email succeeds.](/auth/verify-email/scenarios/s1/) |

| 1.2.F Failed Scenarios |
| ---- |
| [1.2.F1. Verify email fails when required fields are empty.](/auth/verify-email/scenarios/f1/) |
| [1.2.F2. Verify email fails when verification code is invalid.](/auth/verify-email/scenarios/f2/) |

### 1.3. Signin

Enables registered users to log in to the application.

- Path: `/signin`

**Scenarios:**

| 1.3.S Success Scenarios |
| ---- |
| [1.3.S1. Signin succeeds.](/auth/signin/scenarios/s1/) |

| 1.3.F Failed Scenarios |
| ---- |
| [1.3.F1. Signin fails when credentials doesn't match.](/auth/signin/scenarios/f1/) |

### 1.4. Signout

Allows users to securely log out of the application.

**Scenarios:**

| 1.4.S Success Scenarios |
| ---- |
| [1.4.S1. Signout succeeds.](/auth/signout/scenarios/s1/) |

### 1.5. Forgot Password

Allows users to request a password reset link.

- Path: `/forgot-password`

**Scenarios:**

| 1.5.S Success Scenarios |
| ---- |
| [1.5.S1. Forgot password succeeds.](/auth/forgot-password/scenarios/s1/) |

| 1.5.F Failed Scenarios |
| --- |
| [1.5.F1. Forgot password request fails when required fields are empty.](/auth/forgot-password/scenarios/f1/) |
| [1.5.F2. Forgot password request fails when email is not found.](/auth/forgot-password/scenarios/f2/) |

### 1.6. Reset Password

Allows users to create a new password after identity verification.

- Path: `/reset-password`

**Scenarios:**

| 1.6.S Success Scenarios |
| ---- |
| [1.6.S1. Reset password succeeds.](/auth/reset-password/scenarios/s1/) |

| 1.6.F Failed Scenarios |
| ---- |
| [1.6.F1. Reset password fails when required fields are empty.](/auth/reset-password/scenarios/f1/) |
| [1.6.F2. Reset password fails when password is not strong enough.](/auth/reset-password/scenarios/f2/) |
| [1.6.F3. Reset password fails when password confirmation doesn't match.](/auth/reset-password/scenarios/f3/) |

## 2. My Account

User account management features.

### 2.1. Update Password

Allows users to change their account password.

- Path: `/my-account/password`

**Scenarios:**

| 2.1.S Success Scenarios |
| ---- |
| [2.1.S1. Update password succeeds.](/my-account/update-password/scenarios/s1/) |

| 2.1.F Failed Scenarios |
| ---- |
| [2.1.F1. Update password fails when the user is not authenticated.](/my-account/update-password/scenarios/f1/) |
| [2.1.F2. Update password fails when required fields are empty.](/my-account/update-password/scenarios/f2/) |
| [2.1.F3. Update password fails when password is not strong enough.](/my-account/update-password/scenarios/f3/) |
| [2.1.F4. Update password fails when password confirmation doesn't match.](/my-account/update-password/scenarios/f4/) |

### 2.2. Update Profile

Allows users to update their display name and profile picture.

- Path: `/my-account/profile`

**Scenarios:**

| 2.2.S Success Scenarios |
| ---- |
| [2.2.S1. User can update profile successfully.](/my-account/update-profile/scenarios/s1/) |

| 2.2.F Failed Scenarios |
| ---- |
| [2.2.F1. Profile update fails when the user is not authenticated.](/my-account/update-profile/scenarios/f1/) |

## 3. Groups

Group management features for organizing users.

### 3.1. Create Group

Allows users to create a new group.

- Path: `/groups/create`

**Scenarios:**

| 3.1.S Success Scenarios |
| ---- |
| [3.1.S1. Create group succeeds.](/groups/create/scenarios/s1/) |

| 3.1.F Failed Scenarios |
| ---- |
| [3.1.F1. Create group fails when the user is not authenticated.](/groups/create/scenarios/f1/) |
| [3.1.F2. Create group fails when the group name is empty.](/groups/create/scenarios/f2/) |
| [3.1.F3. Create group fails when the group name already exists.](/groups/create/scenarios/f3/) |

### 3.2. List Groups

Displays all groups the user owns or has joined.

- Path: `/groups`

**Scenarios:**

| 3.2.S Success Scenarios |
| ---- |
| [3.2.S1. List groups succeeds for owned groups.](/groups/list/scenarios/s1/) |
| [3.2.S2. List groups succeeds for joined groups.](/groups/list/scenarios/s2/) |

| 3.2.F Failed Scenarios |
| ---- |
| [3.2.F1. List groups fails when the user is not authenticated.](/groups/list/scenarios/f1/) |

### 3.3. Read Group

Displays group information and members.

- Path: `/groups/:id`

**Scenarios:**

| 3.3.S Success Scenarios |
| ---- |
| [3.3.S1. Read group succeeds.](/groups/read/scenarios/s1/) |

| 3.3.F Failed Scenarios |
| ---- |
| [3.3.F1. Read group fails when the user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.3.F2. Read group fails when the user is not a group member.](/groups/read/scenarios/f2/) |

### 3.4. Update Group

Allows group owners to update group information.

- Path: `/groups/:id/edit`

**Scenarios:**

| 3.4.S Success Scenarios |
| ---- |
| [3.4.S1. Update group succeeds.](/groups/update/scenarios/s1/) |

| 3.4.F Failed Scenarios |
| ---- |
| [3.4.F1. Update group fails when the user is not authenticated.](/groups/update/scenarios/f1/) |
| [3.4.F2. Update group fails when the user is not a group owner.](/groups/update/scenarios/f2/) |
| [3.4.F3. Update group fails when the group name is empty.](/groups/update/scenarios/f3/) |
| [3.4.F4. Update group fails when the group name already exists.](/groups/update/scenarios/f4/) |

### 3.5. Delete Group

Allows group owners to permanently delete a group.

**Scenarios:**

| 3.5.S Success Scenarios |
| ---- |
| [3.5.S1. Delete group succeeds.](/groups/delete/scenarios/s1/) |

| 3.5.F Failed Scenarios |
| ---- |
| [3.5.F1. Delete group fails when the user is not authenticated.](/groups/delete/scenarios/f1/) |
| [3.5.F2. Delete group fails when the user is not the group owner.](/groups/delete/scenarios/f2/) |

### 3.6. Invite User

Invites users to join a group.

**Scenarios:**

| 3.6.S Success Scenarios |
| ---- |
| [3.6.S1. Invite user succeeds.](/groups/invite-user/scenarios/s1/) |

| 3.6.F Failed Scenarios |
| ---- |
| [3.6.F1. Invite user fails when the user is not authenticated.](/groups/invite-user/scenarios/f1/) |
| [3.6.F2. Invite user fails when the required field is empty.](/groups/invite-user/scenarios/f2/) |
| [3.6.F3. Invite user fails when an invitation already exists.](/groups/invite-user/scenarios/f3/) |
| [3.6.F4. Invite user fails when the requester is not a group owner.](/groups/invite-user/scenarios/f4/) |

### 3.7. Accept Invitation

Allows invited users to accept a group invitation.

**Scenarios:**

| 3.7.S Success Scenarios |
| ---- |
| [3.7.S1. Accept invitation succeeds.](/groups/accept-invitation/scenarios/s1/) |

### 3.8. Reject Invitation

Allows invited users to reject a group invitation.

**Scenarios:**

| 3.8.S Success Scenarios |
| ---- |
| [3.8.S1. Reject invitation succeeds.](/groups/reject-invitation/scenarios/s1/) |

### 3.9. Remove User

Allows group owner to remove members from a group.

**Scenarios:**

| 3.9.S Success Scenarios |
| ---- |
| [3.9.S1. Remove user succeeds.](/groups/remove-user/scenarios/s1/) |

| 3.9.F Failed Scenarios |
| ---- |
| [3.9.F1. Remove user fails when the user is not authenticated.](/groups/remove-user/scenarios/f1/) |
| [3.9.F2. Remove user fails when the user is not a group owner.](/groups/remove-user/scenarios/f2/) |

## 4. Attendances

The Attendance feature allows users to record their daily work activities by checking in when they start work, checking out when they finish work, and recording break start and break end times.

### 4.1. Check In

Records the start of an user's working day.

- Path: `/check-in`

**Scenarios:**

| 4.1.S Success Scenarios |
| ---- |
| [4.1.S1. Check in succeeds.](/attendances/check-in/scenarios/s1/) |

| 4.1.F Failed Scenarios |
| :--- |
| [4.1.F1. Check in fails when the user is not authenticated.](/attendances/check-in/scenarios/f1/) |
| [4.1.F2. Check in fails when the user has already checked in on the same day.](/attendances/check-in/scenarios/f2/) |
| [4.1.F3. Check in fails when the user has not captured a photo.](/attendances/check-in/scenarios/f3/) |
| [4.1.F4. Check in fails when the user's GPS latitude and longitude cannot be determined.](/attendances/check-in/scenarios/f4/) |

### 4.2. Check Out

Records the end of an user's working day.

- Path: `/check-out`

**Scenarios:**

| 4.2.S Success Scenarios |
| ---- |
| [4.2.S1. Check out succeeds.](/attendances/check-out/scenarios/s1/) |

| 4.2.F Failed Scenarios |
| ---- |
| [4.2.F1. Check out fails when the user is not authenticated.](/attendances/check-out/scenarios/f1/) |
| [4.2.F2. Check out fails when the user has not checked in.](/attendances/check-out/scenarios/f2/) |
| [4.2.F3. Check out fails when the user has already checked out.](/attendances/check-out/scenarios/f3/) |
| [4.2.F4. Check out fails when the user has an active break that has not ended.](/attendances/check-out/scenarios/f4/) |
| [4.2.F5. Check out fails when the user has not captured a photo.](/attendances/check-out/scenarios/f5/) |
| [4.2.F6. Check out fails when the user's GPS latitude and longitude cannot be determined.](/attendances/check-out/scenarios/f6/) |

### 4.3. Break Start

Records an user leaving the workplace during working hours.

- Path: `/break-start`

**Scenarios:**

| 4.3.S Success Scenarios |
| ---- |
| [4.3.S1. Break start succeeds.](/attendances/break-start/scenarios/s1/) |

| 4.3.F Failed Scenarios |
| ---- |
| [4.3.F1. Break start fails when the user is not authenticated.](/attendances/break-start/scenarios/f1/) |
| [4.3.F2. Break start fails when the user has not checked in.](/attendances/break-start/scenarios/f2/) |
| [4.3.F3. Break start fails when the user already checked out.](/attendances/break-start/scenarios/f3/) |
| [4.3.F4. Break start fails when a previous break start is still active.](/attendances/break-start/scenarios/f4/) |
| [4.3.F5. Break start fails when the user has not captured a photo.](/attendances/break-start/scenarios/f5/) |
| [4.3.F6. Break start fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-start/scenarios/f6/) |

### 4.4. Break End

Records an user's return to the workplace after a temporary absence.

- Path: `/break-end`

**Scenarios:**

| 4.4.S Success Scenarios |
| ---- |
| [4.4.S1. Break end succeeds.](/attendances/break-end/scenarios/s1/) |

| 4.4.F Failed Scenarios |
| ---- |
| [4.4.F1. Break end fails when the user is not authenticated.](/attendances/break-end/scenarios/f1/) |
| [4.4.F2. Break end fails when there is no active break start.](/attendances/break-end/scenarios/f2/) |
| [4.4.F3. Break end fails when the user has not captured a photo.](/attendances/break-end/scenarios/f3/) |
| [4.4.F4. Break end fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-end/scenarios/f4/) |

### 4.5. List Attendances

Displays attendance records for homepage.

- Path: `/`

**Scenarios:**

| 4.5.S Success Scenarios |
| ---- |
| [4.5.S1. List attendances succeeds.](/attendances/list/scenarios/s1/) |
| [4.5.S2. List attendances succeeds with user and period filters.](/attendances/list/scenarios/s2/) |

| 4.5.F Failed Scenarios |
| ---- |
| [4.5.F1. List attendances fails when the user is not authenticated.](/attendances/list/scenarios/f1/) |

## 5. Workhour Report 

Generate workhour reports showing each user’s working duration, break durations and net working time.

### 5.1. Read Workhour Report

Allows users to read workhour report

- Path: `/workhour-report`

**Scenarios:**

| 5.1.S Success Scenarios |
| ---- |
| [5.1.S1. Read workhour report succeeds.](/workhour-report/read/scenarios/s1/) |
| [5.1.S2. Read workhour report succeeds with user and period filters.](/workhour-report/read/scenarios/s2/) |

| 5.1.F Failed Scenarios |
| ---- |
| [5.1.F1. Read workhour report fails when the user is not authenticated.](/workhour-report/read/scenarios/f1/) |

### 5.2. Export Workhour Report

Allows users to export workhour report.

**Scenarios:**

| 5.2.S Success Scenarios |
| ---- |
| [5.2.S1. Export workhour report succeeds.](/workhour-report/export/scenarios/s1/) |
| [5.2.S2. Export workhour report succeeds with user and period filters.](/workhour-report/export/scenarios/s2/) |

| 5.2.F Failed Scenarios |
| ---- |
| [5.2.F1. Export workhour report fails when the user is not authenticated.](/workhour-report/export/scenarios/f1/) |

## 6. Attendance Report

Generate attendance reports that include each user’s photo and GPS location for every activity (check-in, check-out, break-start, break-end), enabling user to verify attendance records when needed.

### 6.1. Read Attendance Report

Allows users to read attendance report

- Path: `/attendance-report`

**Scenarios:**

| 6.1.S Success Scenarios |
| ---- |
| [6.1.S1. Read attendance report succeeds.](/attendance-report/read/scenarios/s1/) |
| [6.1.S2. Read attendance report succeeds with user and period filters.](/attendance-report/read/scenarios/s2/) |

| 6.1.F Failed Scenarios |
| ---- |
| [6.1.F1. Read attendance report fails when the user is not authenticated.](/attendance-report/read/scenarios/f1/) |

### 6.2. Export Attendance Report

Allows users to export the report.

**Scenarios:**

| 6.2.S Success Scenarios |
| ---- |
| [6.2.S1. Export attendance report succeeds.](/attendance-report/export/scenarios/s1/) |
| [6.2.S2. Export attendance report succeeds with user and period filters.](/attendance-report/export/scenarios/s2/) |

| 6.2.F Failed Scenarios |
| ---- |
| [6.2.F1. Export attendance report fails when the user is not authenticated.](/attendance-report/export/scenarios/f1/) |