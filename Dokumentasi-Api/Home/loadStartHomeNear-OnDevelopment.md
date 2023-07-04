# Load Bucket

Memuat rekomendasi aktivitas terdekat

**URL** : `/api/loadStartHomeNear`
**Method** : `GET`
**Body** :
```json
{
    "user_id": [integer],
}
```

# Success Responses
**Condition** : Activity ditemukan 
**Content** : Array berisi objek
```json
[
    {
        "act_id": 1,
        "act_name": "Pick Up Game Basket Saparua Minggu Pagi",
        "time_start": "2023-07-02T00:00:00.000Z",
        "time_end": "2023-07-03T02:00:00.000Z",
        "location": "GOR dan Taman Saparua, Jl. Banda No.28, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
        "latitude": -6.90844,
        "longitude": 107.616,
        "category": "sports",
        "community": "Babandungan",
        "kuota": 20,
        "description": "Main seru-seruan, bola disediakan, cukup bawa badan saja :D",
        "image_filename": "header_1.jpg",
        "join_id": 1,
        "user_id": 2,
        "datetime": "2023-06-27T00:00:00.000Z"
    },
    {"contoh":"sama"},
    {"contoh":"sama"},
    {"contoh":"BTW di database belum ada sample data yang done"},
]
```
