const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let dummyActivity = {
    "act_id": 1,
    "act_name": "Pick Up Game Basket Saparua Minggu Pagi",
    "time_start": "2023-07-02 07:00:00",
    "time_end": "2023-07-03 09:00:00",
    "location": "GOR dan Taman Saparua, Jl. Banda No.28, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
    "latitude": -6.90844,
    "longitude": 107.616,
    "category": "sports",
    "community": "Babandungan",
    "kuota": 20,
    "description": "Main seru-seruan, bola disediakan, cukup bawa badan saja :D",
    "image_filename": ""
}

let dummyUser = {
    "user_name" : "Eli Latupono",
    "age" : 39,
    "gender" : 0,
    "email" : "39tupono@gmail.com",
    "images" : '', //belum ada didatabase    
    "alamat" : '' //belum ada didatabase
}

app.get('/api/loadUserActivity', (req, res) => {
    res.json(
        {
            "upcoming": [
                dummyActivity,
                dummyActivity,
                dummyActivity
            ]           
        }
    )
})

app.get('/api/loadBucket', (req, res) => {
    res.json(
        {
            "activities": [
                dummyActivity,
                dummyActivity,
                dummyActivity
            ]           
        }
    )
})

app.post('/api/addToBucket', (req, res) => {
    res.sendStatus(200)
})

app.get('/api/loadActivity', (req, res)=>{
    res.json(
        dummyActivity
    )
})

app.get('/api/loadActivitybyCategory', (req, res)=>{
    res.json(
        {
            "activities": [
                dummyActivity,
                dummyActivity,
                dummyActivity
            ]           
        }
    )
})

app.get('/api/loadStartHome', (req, res)=>{
    res.json(
        {
            'near' :[
                dummyActivity,
                dummyActivity,
                dummyActivity
            ],
            'recommend' :[
                dummyActivity,
                dummyActivity,
                dummyActivity
            ]
        }
    )
})

app.post('/api/quickSurvey', (req, res)=>{
    res.sendStatus(200)
})

app.get('/api/login', (req, res)=>{
    res.sendStatus(200)
})

app.get('/api/loadProfile', (req, res)=>{
    res.json(
        dummyUser
    )
})

app.put('/api/updateInterest', (req, res)=>{
    res.sendStatus(200)
})

app.put('/api/updateProfile', (req, res)=>{
    res.sendStatus(200)
})

app.post('/api/quickSurvey', (req, res)=>{
    res.sendStatus(200)
})

app.post('/api/register', (req, res)=>{
    res.sendStatus(200)
})

app.get('/api/searchActivity', (req, res)=>{
    res.json(
        {
            "activities":[
                dummyActivity,
                dummyActivity,
                dummyActivity
            ]
        }
    )   
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

