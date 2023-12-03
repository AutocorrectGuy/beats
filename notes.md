Database models:

```json
[
  {
    "User": {
    "id": "integer (auto-incremented)",
    "firstname": "string",
    "surname": "string",
    "username": "string",
    "email": "string",
    "email_verified_at": "timestamp (nullable)",
    "password": "string",
    "tags_following": "string[]",
    "profile_image": "string (nullable, path to image file)",
    "remember_token": "string (100 characters, nullable)",
    "created_at": "timestamp",
    "updated_at": "timestamp"
    }
  },
  {
    "Beat": {
    "id": "integer (auto-incremented)",
    "user_id": "integer (foreign key referencing User)",
    "title": "string",
    "description": "string (nullable)",
    "file_path": "string (path to beat file)",
    "beat_image": "string (nullable, path to image file)",
    "created_at": "timestamp",
    "updated_at": "timestamp"
    }
  }
]

```
