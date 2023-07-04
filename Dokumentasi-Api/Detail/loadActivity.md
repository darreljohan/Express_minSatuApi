# Load Activty

Memuat data activity berdasarak ID Activity

**URL** : `/api/loadActivity`

**Method** : GET

**Body** :
```json
{
    "act_id" : [integer]
}
```

## Success Responses
**Condition** : Interest user berhasil diubah

**Code** : `200 OK`

**Content** : 
```json
{
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
}
```


