# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

### Description

This endpoint allows a new user to create an account by providing their first name, last name, email, and password. The password is securely hashed before being stored.

### Request Body

Send a JSON object with the following fields:

| Field                | Type   | Required | Description                                 |
|----------------------|--------|----------|---------------------------------------------|
| fullname.firstname   | String | Yes      | User's first name (min 4 characters)        |
| fullname.lastname    | String | No       | User's last name (min 4 characters, optional)|
| email                | String | Yes      | User's email address (must be valid email)  |
| password             | String | Yes      | User's password (min 6 characters)          |

#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}