---
outline: [2,3]
---

<script setup>
import Sitemap from '../../sitemap.vue'
</script>

# v1.0.0 - Initial Release

## SMART Goals

**Specific:** 

Develop a web application that records employee check-in and check-out times, as well as break durations in real time, enabling accurate tracking of overtime and undertime hours.

**Measurable:** 

- Allow users to create groups and invite others to join.
- Record working hours (check-in, check-out), and break times (break-start, break-end), along with the user's photo and GPS coordinates (latitude and longitude) for each activity.
- Generate workhour reports showing each employee’s total working hours, break durations and net working time.
- Generate attendance reports that include each employee’s photo and GPS location for every activity (check-in, check-out, break-start, break-end), enabling administrators to verify attendance records when needed.
- Support access and usage on both Android and iOS devices through a responsive web application.

**Achievable:**

- The application can be developed using established web technologies and location-based services. 
- Features such as attendance recording, break tracking, GPS location capture, group management, and overtime/undertime calculation can be implemented using readily available frameworks and infrastructure within the project's scope.

**Relevant:**

The application provides a reliable audit trail of employee attendance and working hours by recording check-in, check-out, break activities, and location data in real time. This ensures that attendance records can be verified and reviewed when needed, improving data accuracy, accountability, and compliance with organizational policies.

**Time Bound:**

October 2026

## Sitemap

<div style="width: 100%">
  <sitemap />
</div>

## 1. Auth

User authentication and access control features to secure the application.

### 1.1. Signup

Allows new users to create an account using email and password.

- Path: `/signup`

**Scenarios:**

| 1.1.S Success Scenarios |
| ---- |
| [1.1.S1. User can sign up successfully.](/auth/signup/scenarios/s1/) |

| 1.1.F Failed Scenarios |
| --- |
| [1.1.F1. Sign up fails when required fields are empty.](/auth/signup/scenarios/f1/) |
| [1.1.F2. Sign up fails when username already exists.](/auth/signup/scenarios/f2/) |
| [1.1.F3. Sign up fails when email already exists.](/auth/signup/scenarios/f3/) |
| [1.1.F4. Sign up fails when password is not strong enough.](/auth/signup/scenarios/f4/) |
| [1.1.F5. Sign up fails when password confirmation does not match.](/auth/signup/scenarios/f5/) |

### 1.2. Verify Email

Sends a verification email to confirm the user's email address.

- Path: `/verify-email`

**Scenarios:**

| 1.2.S Success Scenarios |
| ---- |
| [1.2.S1. User can verify email successfully.](/auth/verify-email/scenarios/s1/) |

| 1.2.F Failed Scenarios |
| ---- |
| [1.2.F1. Email verification fails when required fields are empty.](/auth/verify-email/scenarios/f1/) |
| [1.2.F2. Email verification fails when verification code is invalid.](/auth/verify-email/scenarios/f2/) |

### 1.3. Signin

Enables registered users to log in to the application.

- Path: `/signin`

**Scenarios:**

| 1.3.S Success Scenarios |
| ---- |
| [1.3.S1. User can sign in successfully.](/auth/signin/scenarios/s1/) |

| 1.3.F Failed Scenarios |
| ---- |
| [1.3.F1. Sign in fails when credentials do not match.](/auth/signin/scenarios/f1/) |

### 1.4. Signout

Allows users to securely log out of the application.

**Scenarios:**

| 1.4.S Success Scenarios |
| ---- |
| [1.4.S1. User can sign out successfully.](/auth/signout/scenarios/s1/) |

### 1.5. Forgot Password

Allows users to request a password reset link.

- Path: `/forgot-password`

**Scenarios:**

| 1.5.S Success Scenarios |
| ---- |
| [1.5.S1. User can request password reset successfully.](/auth/forgot-password/scenarios/s1/) |

| 1.5.F Failed Scenarios |
| --- |
| [1.5.F1. Password reset request fails when required fields are empty.](/auth/forgot-password/scenarios/f1/) |
| [1.5.F2. Password reset request fails when email is not found.](/auth/forgot-password/scenarios/f2/) |

### 1.6. Reset Password

Allows users to create a new password after identity verification.

- Path: `/reset-password`

**Scenarios:**

| 1.6.S Success Scenarios |
| ---- |
| [1.6.S1. User can reset password successfully.](/auth/reset-password/scenarios/s1/) |

| 1.6.F Failed Scenarios |
| ---- |
| [1.6.F1. Password reset fails when required fields are empty.](/auth/reset-password/scenarios/f1/) |
| [1.6.F2. Password reset fails when password is not strong enough.](/auth/reset-password/scenarios/f2/) |
| [1.6.F3. Password reset fails when password confirmation does not match.](/auth/reset-password/scenarios/f3/) |

## 2. My Account

User profile management features.

### 2.1. Update Username

Allows users to update their username.

- Path: `/my-account/username`

**Scenarios:**

| 2.1.S Success Scenarios |
| ---- |
| [2.1.S1. User can update username successfully.](/my-account/update-username/scenarios/s1/) |

| 2.1.F Failed Scenarios |
| ---- |
| [2.1.F1. Username update fails when user is not authenticated.](/my-account/update-username/scenarios/f1/) |
| [2.1.F2. Username update fails when required fields are empty.](/my-account/update-username/scenarios/f2/) |
| [2.1.F3. Username update fails when username already exists.](/my-account/update-username/scenarios/f3/) |

### 2.2. Update Email

Allows users to update their email address.

- Path: `/my-account/email`

**Scenarios:**

| 2.2.S Success Scenarios |
| ---- |
| [2.2.S1. User can update email successfully.](/my-account/update-email/scenarios/s1/) |

| 2.2.F Failed Scenarios |
| ---- |
| [2.2.F1. Email update fails when user is not authenticated.](/my-account/update-email/scenarios/f1/) |
| [2.2.F2. Email update fails when required fields are empty.](/my-account/update-email/scenarios/f2/) |
| [2.2.F3. Email update fails when email already exists.](/my-account/update-email/scenarios/f3/) |

### 2.3. Update Password

Allows users to change their account password.

- Path: `/my-account/password`

**Scenarios:**

| 2.3.S Success Scenarios |
| ---- |
| [2.3.S1. User can update password successfully.](/my-account/update-password/scenarios/s1/) |

| 2.3.F Failed Scenarios |
| ---- |
| [2.3.F1. Password update fails when user is not authenticated.](/my-account/update-password/scenarios/f1/) |
| [2.3.F2. Password update fails when required fields are empty.](/my-account/update-password/scenarios/f2/) |
| [2.3.F3. Password update fails when password is not strong enough.](/my-account/update-password/scenarios/f3/) |
| [2.3.F4. Password update fails when password confirmation does not match.](/my-account/update-password/scenarios/f4/) |

### 2.4. Update Profile

Allows users to update their display name and profile picture.

- Path: `/my-account/profile`

**Scenarios:**

| 2.4.S Success Scenarios |
| ---- |
| [2.4.S1. User can update profile successfully.](/my-account/update-profile/scenarios/s1/) |

| 2.4.F Failed Scenarios |
| ---- |
| [2.4.F1. Profile update fails when user is not authenticated.](/my-account/update-profile/scenarios/f1/) |
| [2.4.F2. Profile update fails when required fields are empty.](/my-account/update-profile/scenarios/f2/) |
| [2.4.F3. Profile update fails when profile already exists.](/my-account/update-profile/scenarios/f3/) |


## 3. Groups

Group management features for organizing users.

### 3.1. Create Group

Allows users to create a new group.

- Path: `/groups/create`

**Scenarios:**

| 3.1.S Success Scenarios |
| ---- |
| [3.1.S1. User can create a group successfully.](/groups/create/scenarios/s1/) |

| 3.1.F Failed Scenarios |
| ---- |
| [3.1.F1. Create group fails when user is not authenticated.](/groups/create/scenarios/f1/) |
| [3.1.F2. Create group fails when the group name is empty.](/groups/create/scenarios/f2/) |
| [3.1.F3. Create group fails when the group name already exists.](/groups/create/scenarios/f3/) |

### 3.2. List Groups

Displays all groups the user owns or has joined.

- Path: `/groups`

**Scenarios:**

| 3.2.S Success Scenarios |
| ---- |
| [3.2.S1. User can view all groups they own.](/groups/list/scenarios/s1/) |
| [3.2.S2. User can view all groups they have joined.](/groups/list/scenarios/s2/) |

| 3.2.F Failed Scenarios |
| ---- |
| [3.2.F1. Read list groups fails when user is not authenticated.](/groups/read/scenarios/f1/) |

### 3.3. Read Group

Displays group information and members.

- Path: `/groups/:id`

**Scenarios:**

| 3.3.S Success Scenarios |
| ---- |
| [3.3.S1. User can view group details successfully.](/groups/read/scenarios/s1/) |

| 3.3.F Failed Scenarios |
| ---- |
| [3.3.F1. Read group fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.3.F2. Read group fails when the user is not a group member.](/groups/read/scenarios/f2/) |

### 3.4. Update Group

Allows group owners to update group information.

- Path: `/groups/:id/edit`

**Scenarios:**

| 3.4.S Success Scenarios |
| ---- |
| [3.4.S1. Group owner can update group information successfully.](/groups/edit/scenarios/s1/) |

| 3.4.F Failed Scenarios |
| ---- |
| [3.4.F1. Edit group fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.4.F2. Edit group fails when the user is not a group owner.](/groups/edit/scenarios/f2/) |
| [3.1.F3. Edit group fails when the group name is empty.](/groups/create/scenarios/f3/) |
| [3.4.F4. Edit group fails when the group name already exists.](/groups/edit/scenarios/f4/) |

### 3.5. Delete Group

Allows group owners to permanently delete a group.

**Scenarios:**

| 3.5.S Success Scenarios |
| ---- |
| [3.5.S1. Group owner can delete a group successfully.](/groups/delete/scenarios/s1/) |

| 3.5.F Failed Scenarios |
| ---- |
| [3.5.F1. Delete group fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.5.F2. Delete group fails when the user is not the group owner.](/groups/delete/scenarios/f1/) |

### 3.6. Invite User

Invites users to join a group.

**Scenarios:**

| 3.6.S Success Scenarios |
| ---- |
| [3.6.S1. Group owner can invite a user successfully.](/groups/invite/scenarios/s1/) |

| 3.6.F Failed Scenarios |
| ---- |
| [3.6.F1. Invite user fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.6.F2. Invite user fails when the user already belongs to the group.](/groups/invite/scenarios/f2/) |
| [3.6.F3. Invite user fails when an invitation already exists.](/groups/invite/scenarios/f3/) |
| [3.6.F4. Invite user fails when the requester is not a group owner.](/groups/invite/scenarios/f4/) |

### 3.7. Accept Invitation

Allows invited users to accept a group invitation.

**Scenarios:**

| 3.7.S Success Scenarios |
| ---- |
| [3.7.S1. User can accept a group invitation successfully.](/groups/accept-invitation/scenarios/s1/) |

### 3.8. Reject Invitation

Allows invited users to reject a group invitation.

**Scenarios:**

| 3.8.S Success Scenarios |
| ---- |
| [3.8.S1. User can request to join a group successfully.](/groups/reject-invitation/scenarios/s1/) |

### 3.9. Remove User

Allows group owner to remove members from a group.

**Scenarios:**

| 3.9.S Success Scenarios |
| ---- |
| [3.9.S1. Group administrator can remove a member successfully.](/groups/remove-user/scenarios/s1/) |

| 3.9.F Failed Scenarios |
| ---- |
| [3.9.F1. Remove user fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [3.9.F2. Remove user fails when the user is not a group owner.](/groups/remove-user/scenarios/f1/) |

## 4. Attendances

The Attendance feature allows users to record their daily work activities by checking in when they start work, checking out when they finish work, and recording break start and break end times.

### 4.1. Check In

Records the start of an employee's working day.

- Path: `/check-in`

**Scenarios:**

| 4.1.S Success Scenarios |
| ---- |
| [4.1.S1. User can check in successfully.](/attendances/check-in/scenarios/s1/) |

| 4.1.F Failed Scenarios |
| :--- |
| [4.1.F1. Check in fails when the user is not authenticated.](http://localhost:5173/attendances/check-in/scenarios/f1/) |
| [4.1.F2. Check in fails when the user has already checked in on the same day.](http://localhost:5173/attendances/check-in/scenarios/f2/) |
| [4.1.F3. Check in fails when the user has not captured a photo.](http://localhost:5173/attendances/check-in/scenarios/f3/) |
| [4.1.F4. Check in fails when the user's GPS latitude and longitude cannot be determined.](http://localhost:5173/attendances/check-in/scenarios/f4/) |

### 4.2. Check Out

Records the end of an employee's working day.

- Path: `/check-out`

**Scenarios:**

| 4.2.S Success Scenarios |
| ---- |
| [4.2.S1. User can check out successfully.](/attendances/check-out/scenarios/s1/) |

| 4.2.F Failed Scenarios |
| ---- |
| [4.2.F1. Check out fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [4.2.F2. Check out fails when the user has not checked in.](/attendances/check-out/scenarios/f2/) |
| [4.2.F3. Check out fails when the user has already checked out.](/attendances/check-out/scenarios/f3/) |
| [4.2.F4. Check out fails when the user has an active break that has not ended.](/attendances/check-out/scenarios/f4/) |
| [4.2.F5. Check out fails when the user has not captured a photo.](/attendances/check-out/scenarios/f5/) |
| [4.2.F6. Check out fails when the user's GPS latitude and longitude cannot be determined.](/attendances/check-out/scenarios/f6/) |

### 4.3. Break Start

Records an employee leaving the workplace during working hours.

- Path: `/break-start`

**Scenarios:**

| 4.3.S Success Scenarios |
| ---- |
| [4.3.S1. User can record a break start successfully.](/attendances/break-start/scenarios/s1/) |

| 4.3.F Failed Scenarios |
| ---- |
| [4.3.F1. Break Start fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [4.3.F2. Break Start fails when the user has not checked in.](/attendances/break-start/scenarios/f2/) |
| [4.3.F3. Break Start fails when the user already checked out.](/attendances/break-start/scenarios/f3/) |
| [4.3.F4. Break Start fails when a previous break start is still active.](/attendances/break-start/scenarios/f4/) |
| [4.3.F5. Break Start fails when the user has not captured a photo.](/attendances/break-start/scenarios/f5/) |
| [4.3.F6. Break Start fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-start/scenarios/f6/) |

### 4.4. Break End

Records an employee's return to the workplace after a temporary absence.

- Path: `/break-end`

**Scenarios:**

| 4.4.S Success Scenarios |
| ---- |
| [4.4.S1. User can record a break end successfully.](/attendances/break-end/scenarios/s1/) |

| 4.4.F Failed Scenarios |
| ---- |
| [4.4.F1. Break End fails when user is not authenticated.](/groups/read/scenarios/f1/) |
| [4.4.F2. Break End fails when there is no active break start.](/attendances/break-end/scenarios/f2/) |
| [4.4.F3. Break End fails when the user has not captured a photo.](/attendances/break-start/scenarios/f3/) |
| [4.4.F4. Break End fails when the user's GPS latitude and longitude cannot be determined.](/attendances/break-start/scenarios/f4/) |

### 4.5. List Attendances

Displays attendance records for homepage.

- Path: `/`

**Scenarios:**

| 4.5.S Success Scenarios |
| ---- |
| [4.5.S1. User can view attendance records successfully.](/attendances/list/scenarios/s1/) |

| 4.5.F Failed Scenarios |
| ---- |
| [4.5.F1. Read list attendances fails when user is not authenticated.](/groups/read/scenarios/f1/) |

## 5. Workhour Report 

Generate workhour reports showing each employee’s total working hours, break durations and net working time.

### 5.1. Read Workhour Report

Allows users to read workhour report

- Path: `/workhour-report`

**Scenarios:**

| 5.1.S Success Scenarios |
| ---- |
| [5.1.S1. User can view workhour report successfully.](/workhour-report/read/scenarios/s1/) |
| [5.1.S2. User can view workhour report by filtered user and period.](/workhour-report/read/scenarios/s2/) |

| 5.1.F Failed Scenarios |
| ---- |
| [5.1.F1. Read workhour report fails when user is not authenticated.](/workhour-report/read/scenarios/f1/) |

### 5.2. Export Workhour Report

Allows users to export workhour report.

**Scenarios:**

| 5.2.S Success Scenarios |
| ---- |
| [5.2.S1. User can export workhour report successfully.](/workhour-report/export/scenarios/s1/) |
| [5.2.S2. User can export workhour report by filtered user and period.](/workhour-report/export/scenarios/s2/) |

| 5.2.F Failed Scenarios |
| ---- |
| [5.2.F1. Export workhour report fails when user is not authenticated.](/workhour-report/export/scenarios/f1/) |

## 6. Attendance Report

Generate attendance reports that include each employee’s photo and GPS location for every activity (check-in, check-out, break-start, break-end), enabling administrators to verify attendance records when needed.

### 6.1. Read Attendance Report

Allows users to read attendance report

- Path: `/attendance-report`

**Scenarios:**

| 6.1.S Success Scenarios |
| ---- |
| [6.1.S1. User can view attendance report successfully.](/attendance-report/read/scenarios/s1/) |
| [6.1.S2. User can view attendance report by filtered user and period.](/attendance-report/read/scenarios/s2/) |

| 6.1.F Failed Scenarios |
| ---- |
| [6.1.F1. Read attendance report fails when user is not authenticated.](/attendance-report/read/scenarios/f1/) |

### 6.2. Export Attendance Report

Allows users to export the report.

**Scenarios:**

| 6.2.S Success Scenarios |
| ---- |
| [6.2.S1. User can export attendance report successfully.](/attendance-report/export/scenarios/s1/) |
| [6.2.S2. User can export attendance report by filtered user and period.](/attendance-report/export/scenarios/s2/) |

| 6.2.F Failed Scenarios |
| ---- |
| [6.2.F1. Export attendance report fails when user is not authenticated.](/attendance-report/export/scenarios/f1/) |