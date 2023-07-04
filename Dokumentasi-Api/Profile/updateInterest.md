# Update Profile

Mengubah data berupa interest pengguna berdasarkan opsi yang dipilih

**URL** : `/api/updateInterest`

**Method** : PUT

**Body** :

```json
{
    "user_id" :[string],
    "sports": [Integer, jumlah menu sports yang dipilih],
    "arts": [Integer, jumlah menu arts yang dipilih],
    "travel": [Integer, jumlah menu travel yang dipilih],
    "edu": [Integer, jumlah menu edu yang dipilih]
}
```

## Success Responses
**Condition** : Interest user berhasil diubah

**Code** : `200 OK`


