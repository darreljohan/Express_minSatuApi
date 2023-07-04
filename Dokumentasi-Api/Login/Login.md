# Login User

Memasukkan hasil pendaftaran user kedalam database

**URL** : `/api/login`

**Method** : GET

**Body** :
```json
{
    "email": "[string]",
    "password": "[string]"
}
```
## Failed Responses
**Condition** : Email atau Password salah

**Content** :
```json
{
    "user_id" : "string kosong",
    "status" : "400"
}
```


# Success Responses
**condition**: Login berhasil - Direct ke quick Survey. Responses diberikan ketika user tidak memiliki data quick survey di database

**Code** : `201 OK`

**Content** :
```json
{
    "user_id" : [integer],
    "status" : "201"
}
```

## Success Responses
**Condition** : Login berhasil - Direct ke Home

**Code** : `200 OK`

**Content** :
```json
{
    "user_id" : [integer],
    "status" : "200"
}
```

