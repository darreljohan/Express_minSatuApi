# Load Home - Deprecated

Memberikan data rekomendasi aktivitas terdekat dan terpopuler. 

**URL** : `/api/loadStartHome`

**Method** : GET

**Body** :
```json
{
    "user_id":  "[integer]",
}
```

## Success Responses
**Condition** : Aktivitas berhasil diambil

**Code** : `200 OK`

**Content** :
```json
{
    "near":[ //Key untuk rekomendasi aktivitas terdekat
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
    },
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama}
    ],
    "recommend" :  [ //key untuk aktivitas hasil rekomendasi Machine Learning
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama},
    { activity juga, format jsonnya sama}
    ]
}
```
