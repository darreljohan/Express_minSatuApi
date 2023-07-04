# Load Bucket

Memuat activity yang terdaftar di bucket user

**URL** : `/api/loadBucket`

**Method** : `GET`

**Body** :
```json
{
    "user_id": [integer],
}
```

# Success Responses
**Condition** : Activity berhasil masuk kedalam bucket

**Code** : `200 OK`

**Content** : 
```json
{
    "activities" : [{
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
    { "activity juga,":" format jsonnya sama"},
    { "activity juga,":" format jsonnya sama"},
    { "activity juga,":" format jsonnya sama"}
    ]
        
}
```
