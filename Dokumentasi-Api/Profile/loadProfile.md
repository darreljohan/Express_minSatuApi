# Load User Activity

Mengirimkan data berupa identitas Pengguna berdasarkan user_id

**URL** : `/api/loadProfile`

**Method** : GET

**Body** :
```json
{
    user_id :[string],
}
```

## Success Responses
**Condition** : Identitas user berhasil ditemukan

**Code** : `200 OK`

**Content** : Image belum columnya ada didatabase, sementara ini dulu :D
```json
{
    "user_id": 2,
    "user_name": "darrel",
    "age": 15,
    "gender": 1,
    "email": "johan@email.com",
    "passwords": "Ban2-98077",
    "latitude": -6.37778,
    "longitude": 106.92,
    "interest_sports": 0.4,
    "interest_arts": 0,
    "interest_travel": 0.4,
    "interest_edu": 0,
    "travel_dist": "<10 Km"
}
```
