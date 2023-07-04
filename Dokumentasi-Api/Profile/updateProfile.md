# Update Profile

Mengubah data berupa identitas Pengguna berdasarkan user_id

**URL** : `/api/updateProfile`

**Method** : PUT

**Body** :
```json
{
    "user_id" :[string],
    "user_name" : [String],
    "age" : [integer],
    "gender" : [bool],
    "email" : [string]
}
```

## Success Responses
**Condition** : Identitas user berhasil diubah

**Code** : `200 OK`


