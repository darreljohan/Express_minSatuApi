# Load User Activity - On Development

Mengirimkan data berupa aktivitas pengguna berdasarkan filter search

**URL** : `/api/searchActivity`

**Method** : GET

**Body** :
```json
{
    user_id :[string],
    search_name : [string], //Jika tidak memasukkan nama, kirimkan ""
    category : [string], //jika tidak memasukkan category, kirimkan "category"
    activity : [string], //jika tidak memasukkan activity, kirimkan ""
    location : [int], //jarak dalam kilometer kah?, jika tidak memasukan location, kirimkan 0
    community : [string], //jika tidak memasukkan community, kirimkan "community"
}
```

## Success Responses
**Condition** : Position berhasil diubah

**Code** : `200 OK`

**Content** :
```json
{
    "activity" :[{
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
