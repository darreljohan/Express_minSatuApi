# Load Activity by Category

Memberikan data semua aktivitas sesuai kategori
**URL** : `/api/loadCategory`

**Method** : GET

**Body** :
```json
{
    "user_id":  [integer],
    "category": [string]
}
```

## Success Responses
**Condition** : Aktivitas berhasil diambil

**Code** : `200 OK`

**Content** :
```json
{
    "activity":[{
        "act_id" : [integer],
        "act_name" : [string],
        "time_start" : [datetime],
        "time_end" : [datetime],
        "location" : [string],
        "latitude" :[float],
        "longitude" :[float],
        "category" :[string],
        "comunity" : [string],
        "kuota" : [int],
        "description" : [string],
        "image" : [image]
    },
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama}
    ]
}
```
