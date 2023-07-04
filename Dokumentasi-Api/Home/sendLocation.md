# Update User Location

Mengupdate data lokasi dengan parameter longitude dan latitude
**Saran** : 
* Dipanggil ketika menu Home pertama kali di load atau setelah login
* Dipanggil ketika user ingin mengupdate lokasi

**URL** : `/api/sendLocation`

**Method** : PUT

**Body** :
```json
{
    "user_id":  [string],
    "longitude": [float],
    "latitude": [float]
}
```

## Success Responses
**Condition** : Position berhasil diubah
**Code** : `200 OK`
