const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const mysql = require('mysql')
const date = require('date-and-time');
const fs = require('fs');
const request = require('request')

app.use(express.json())
const port = 3000 //Configure with empty port on your server
const MACHINE_LEARNING_MODEL = 'http://34.101.174.174:5000/api/flask' //Configure this url to your Script.py Address (default : localhost:3000/api/flask)

const connection =  mysql.createConnection({ //Configure your database
  multipleStatements: true,
  host: '34.101.62.4',
  user: 'root',
  password: 'password',
  database: 'minsatu_usersdata'
})
connection.connect()


let loadUpcomingActivity = (id)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities INNER JOIN user_joined ON activities.act_id=user_joined.act_id WHERE user_joined.user_id='+ id+
    ' AND activities.time_end>user_joined.datetime',
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    ) 
  })
}

let loadDoneActivity = (id)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities INNER JOIN user_joined ON activities.act_id=user_joined.act_id WHERE user_joined.user_id=2'+
    ' AND activities.time_end<=user_joined.datetime',
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loadUserBucket = (id)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities INNER JOIN user_bucketed ON activities.act_id=user_bucketed.act_id WHERE user_bucketed.user_id='+id,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let addToBucket = (user, act, datetime)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('INSERT INTO user_bucketed (user_id, act_id, datetime) VALUES (?, ?, ?)',
    [user, act, datetime],
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let checkActivityJoinCount = (act)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT COUNT(*) AS counter FROM user_joined WHERE act_id='+act,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let addToJoin = (user, act, datetime)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('INSERT INTO user_joined (user_id, act_id, datetime) VALUES (?, ?, ?)',
    [user, act, datetime],
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loadActivityCountChecker = (act, count)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities WHERE act_id='+act+" AND kuota>"+count,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loadActivityByID = (act)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities WHERE act_id='+act,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loadActivityByCategory = (category)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities WHERE category="'+category+'"',
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let sendLocation = (id, long, lat)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('UPDATE users SET longitude='+long+', latitude='+lat+' WHERE user_id='+id,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loadProfile = (id)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM users WHERE user_id='+id,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let updateInterest = (id, sports, arts, travel, edu)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('UPDATE users SET interest_sports='+sports+', interest_arts='+arts+', interest_travel='+travel+', interest_edu='+edu+' WHERE user_id='+id,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let interestValue = (point)=>{
  if(point<3){
    return point*0.4
  }else{
    return 1
  }
}

let updateProfile = (body)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ("UPDATE users SET user_name='"+body.user_name+"', age="+body.age+", gender="+body.gender+", email='"+body.email+"' WHERE user_id="+  body.user_id,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let updateNewInterest = (body)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ("UPDATE users SET travel_dist='"+body.travel_dist+"', interest_sports="+interestValue(body.sports)+
    ', interest_arts='+interestValue(body.arts)+', interest_travel='+interestValue(body.travel)+', interest_edu='+interestValue(body.edu)+
    ", gender="+body.gender+", age="+body.age+' WHERE user_id='+body.user_id,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loginAuth = (body)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ("SELECT * FROM users WHERE email='"+body.email+"' AND passwords='"+body.password+"'",
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      } 
    }
    )
  })
}

let loadDistanceReq = (body)=>{
  if(body == "<10 Km"){
    return 1
  }else if(body == "10-50 Km"){
    return 2
  }else{
    return 3
  }
}

let loadActivityByDistance = (user, dist_preference)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ('SELECT * FROM activities WHERE travel_dist="'+body.travel_dist+'"',
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let loadActivityByRecommended = (array)=>{
  return new Promise((resolve, reject)=>{
    console.log(array)
    let query = "SELECT * FROM activities WHERE "
    if(array == null){
      query=query+"false"
    }else{
      array.forEach((act)=>{
        query=query+"act_id ="+act+" OR " 
      })
    }
    query = query+"0"
    
    connection.query
    (query,
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

const getData = async (body) => {
  return new Promise((resolve, reject)=>{
    const requestOptions = {
      url: 'http://34.101.174.174:5000/api/flask',
      method: 'GET',
      json: {},
      qs: {
        offset: 20
      }
    };
    request(requestOptions, (err, response, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body);
      }
    });
  })
}

let register = (body)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ("INSERT INTO users (user_name, email, passwords) VALUES ('"+body.user_name+"', '"+body.email+"', '"+body.password+"')",
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

let checkAccount = (body)=>{
  return new Promise((resolve, reject)=>{
    connection.query
    ("SELECT * FROM users WHERE email='"+body.email+"'",
    (err, rows, fields)=>{
      if (err){
        reject(err)
      }else{
        resolve(rows)
      }
    }
    )
  })
}

app.post('/api/login', (req, res)=>{ // send UID
  let user = loginAuth(req.body)
  let temp = user.then((value)=>{
    let userParse = JSON.parse(JSON.stringify(value))
    let packet = {"user_id": "", "status": 400}
    if(userParse.length==0){
      res.send(packet)
    }else{
    if(userParse[0].interest_sport==null &&
      userParse[0].interest_arts==null &&
      userParse[0].interest_travel==null &&
      userParse[0].interest_edu==null){
      packet.user_id = userParse[0].user_id
      packet.status = 201
      res.send(packet)
    }else{
      packet.user_id = userParse[0].user_id
      packet.status = 200
      res.send(packet)
    }
  }
  },
  (err)=>{
    res.send(err)
  })
})

app.post('/api/register', (req, res) => { 
  let temp = checkAccount(req.body).then((value)=>{
    if(value.length == 0){
      let temp1 = register(req.body).then((value)=>{
        res.sendStatus(200)
      },
      (err)=>{
        res.send(err)
      })
    }else{
      res.sendStatus(401)
    }
  },
  (err)=>{
    res.sendStatus(400)
  })

})

app.get('/api/loadUserActivityUpcoming', (req, res) => {

  let upcoming = loadUpcomingActivity(req.body.user_id)
  let temp =  upcoming.then((value)=>{
        res.send(JSON.parse(JSON.stringify(value)))
      },
      (err)=>{
        console.log(err)
        res.sendStatus(404)
      }
    )
})

app.get('/api/loadUserActivityDone', (req, res) => {

  let upcoming = loadDoneActivity(req.body.user_id)
  let temp =  upcoming.then((value)=>{
        res.send(JSON.parse(JSON.stringify(value)))
      },
      (err)=>{
        res.sendStatus(404)
      }
    )
  
})

app.get('/api/loadBucket', (req, res)=>{

  let activities = loadUserBucket(req.body.user_id)
  let temp = activities.then((value)=>{
    let packet = {"activities":[]}
    packet.activities = packet.activities.concat(JSON.parse(JSON.stringify(value)))
    res.send(packet)
  },
  (err)=>{
    res.sendStatus(404)
  })

})

app.post('/api/addToBucket', (req, res)=>{
  const now = new Date()
  let datetime = date.format(now, 'YYYY-MM-DD hh:mm:ss')
  let appended = addToBucket(req.body.user_id, req.body.act_id, datetime)
  let temp = appended.then((value)=>{
    res.sendStatus(200)
  },
  (err)=>{
    res.send(err)
  })
  
})

app.post('/api/askToJoin', (req, res)=>{
 
  let joined =  checkActivityJoinCount(req.body.act_id)
  
  let temp = joined.then((value)=>{
    console.log(JSON.parse(JSON.stringify(value))[0].counter)
    let temp1 = loadActivityCountChecker(req.body.act_id, JSON.parse(JSON.stringify(value))[0].counter).then((value1)=>{
      
      if(value1.length == 0){
        res.sendStatus(400)
      }else{
        const now = new Date()
        let datetime = date.format(now, 'YYYY-MM-DD hh:mm:ss')
        let appended = addToJoin(req.body.user_id, req.body.act_id, datetime)
        let tempIn = appended.then((value2)=>{
        res.sendStatus(200)
        },
        (err)=>{
          res.send(err)
        })
      }
    },
    (err)=>{
      res.sendStatus(400)
    })
  },
  (err)=>{
    res.send(err)
  })
})


app.get('/api/loadActivity', (req, res)=>{
  let activities = loadActivityByID(req.body.act_id)
  let temp = activities.then((value)=>{
    res.send(JSON.parse(JSON.stringify(value))[0])
  },
  (err)=>{
    res.sendStatus(404)
  })
})

app.get('/api/loadActivityByCategory', (req, res)=>{
  let activities = loadActivityByCategory(req.body.category)
  let temp = activities.then((value)=>{
    let packet = {"activity":[]}
    packet.activity = packet.activity.concat(JSON.parse(JSON.stringify(value)))
    res.send(packet)
  },
  (err)=>{
    res.sendStatus(404)
  })
})

app.get('/api/loadStartHomeNear', (req, res)=>{ // On Development
  let profile = loadProfile(req.body.user_id)
  let temp = profile.then((value)=>{
    let activities = loadActivityByDistance(JSON.parse(JSON.stringify(value))[0], loadDistanceReq(JSON.parse(JSON.stringify(value))[0].travel_dist))
    let temp1 = activities.then((value)=>{
      
    })
  },
  (err)=>{

  })
})

app.get('/api/loadStartHomeRecommend', (req, res)=>{
  let profile = loadProfile(req.body.user_id)
  let temp = profile.then((value)=>{
    let data = JSON.parse(JSON.stringify(value))[0]
    let apiConsume = getData(JSON.parse(JSON.stringify(value))[0])
    let temp1 = apiConsume.then((value)=>{
      let arrayActivities = []
      arrayActivities = arrayActivities.concat(JSON.parse(JSON.stringify(value)).rank)
      let temp2 = loadActivityByRecommended(arrayActivities).then((value)=>{
        res.send(JSON.parse(JSON.stringify(value)))
      },
      (err)=>{
        res.sendStatus(400)
      })
    
      },
      (err)=>{
        res.sendStatus(400)
      })
     
    },
    (err)=>{
      res.sendStatus(400)
    })
  }, 
  (err)=>{

})


app.put('/api/sendLocation', (req, res)=>{
  let update = sendLocation(req.body.user_id, req.body.longitude, req.body.latitude)
  let temp = update.then((value)=>{
    res.sendStatus(200)
  },
  (err)=>{
    res.sendStatus(404)
  })
})

app.get('/api/loadProfile', (req, res)=>{
  let user = loadProfile(req.body.user_id)
  let temp = user.then((value)=>{
    res.send(JSON.parse(JSON.stringify(value))[0])
  },
  (err)=>{
    res.sendStatus(404)
  })
})

app.put('/api/updateInterest', (req, res)=>{
  let append = updateInterest(req.body.user_id, interestValue(req.body.sports), interestValue(req.body.arts), interestValue(req.body.travel), interestValue(req.body.edu))
  let temp = append.then((value)=>{
    res.sendStatus(200)
  },
  (err)=>{
    res.send(err)
  })
})

app.put('/api/updateProfile', (req, res)=>{
  let append = updateProfile(req.body)
  let temp = append.then((value)=>{
    res.sendStatus(200)
  },
  (err)=>{
    res.send(err)
  })
})

app.post('/api/quickSurvey', (req, res)=>{
  let append = updateNewInterest(req.body)
  let temp = append.then((value)=>{
    res.sendStatus(200)
  },
  (err)=>{
    res.send(err)
  })
})

app.get('/api/searchActivity', (req, res)=>{ //On Development
  res.send(400)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})