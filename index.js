const express = require('express')
const app = express()

const cors = require('cors')
const mysql = require("mysql")
const PORT = 3001

const db = mysql.createPool(
    {
        host:"us-cdbr-east-03.cleardb.com",
        user:"b7ed0185b87f5a",
        password:"5002566e",
        port: 3306,
        database:"heroku_0f86c69fadc41f1"
    }
)


app.use(cors())
app.use(express.json())


app.get("/api/africa/:id", (req, res)=>{
const postId = parseInt(req.params.id)
    const sqlSelect = `SELECT * FROM africa WHERE id = ?`
    db.query(sqlSelect, [postId]  ,(err, result, fields)=>{
        if (err) console.log(err)
        res.send(result)
    })
})

app.get("/api/america/:id", (req, res)=>{
    const postId = parseInt(req.params.id)
        const sqlSelect = `SELECT * FROM america WHERE id = ?`
        db.query(sqlSelect, [postId]  ,(err, result, fields)=>{
            if (err) console.log(err)
            res.send(result)
        })
    })

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server running on port ' + PORT)
})