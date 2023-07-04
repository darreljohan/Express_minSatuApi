# Load User Activity - deprecated

Mengirimkan data berupa aktivitas pengguna yang sedang berjalan maupun telah selesai

**URL** : `/api/loadUserActivity`

**Method** : GET

**Body** :
```json
{
    user_id :[string]
}
```

## Success Responses
**Condition** : Data berhasil diambil dari database

**Code** : `200 OK`

**Content** :
```json
{
    "upcoming":  [
    {
        "act_id" : "integer",
        "act_name" : "string",
        "time_start" : "datetime",
        "time_end" : "datetime",
        "location" : "float",
        "latitude" :"float",
        "longitude" :"longitude",
        "category" :"category",
        "community" : "community",
        "kuota" : "integer",
        "description" : "string",
        "image" : "image.png"
    },
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama}
    ],

    "done": [
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama}
    ]
}
```
