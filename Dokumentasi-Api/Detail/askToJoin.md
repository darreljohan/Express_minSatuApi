# Ask To Join

Mendaftarkan user kedalam suatu activity

**URL** : `/api/askToJoin`

**Method** : `POST`

**Body** :
```json
{
    "user_id": [integer],
    "act_id" : [integer]
}
```
## Failed Response
**Condition** : Kuota activity telah penuh

**Code** : `400 Bad Request`

## Success Responses
**Condition** : User berhasil mendaftar kedalam activity

**Code** : `200 OK`



