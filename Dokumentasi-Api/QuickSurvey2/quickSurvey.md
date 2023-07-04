# POST Quick Survey

Memasukkan hasil quick survey user ke dalam database
**URL** : `/api/quickSurvey`

**Method** : POST

**Body** :
```json
{
    "user_id":  "String",
    "age": "integer",
    "gender": "1 laki laki, 0 perempuan",
    "travel_dist": "string",
    "sports": [Integer, jumlah menu sports yang dipilih],
    "arts": [Integer, jumlah menu arts yang dipilih],
    "travel": [Integer, jumlah menu travel yang dipilih],
    "edu": [Integer, jumlah menu edu yang dipilih]
}
```
## Success Responses
**Condition** : Hasil survey telah masuk kedalam database

**Code** : `200 OK`
