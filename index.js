const express = require('express')
const app = express()

const cors = require('cors')
const mysql = require("mysql")
const PORT = 3001

const db = mysql.createPool(
    {
        host:"bxkktrjsg3toq8hysfqj-mysql.services.clever-cloud.com",
        user:"usdtqs4s7yu4hmsp",
        password:"k097yRTCxrnVG5HJwJUW",
        port: 3306,
        database:"bxkktrjsg3toq8hysfqj"
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