const express = require('express')
const bodyParser = require('body-parser')

// MySQL
var MySQL = require('mysql')

const app = express()

// Server
const NAME = "Food Menu Recommendation"
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Pool Connection
var mysqlPool = MySQL.createPool({
    connectionLimit: 10,
    host: '34.123.72.38',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'food_recommendation'
});

// API Sign In
app.post('/signin', (req, res) => {
    mysqlPool.getConnection(async function (err, connection) {
        if (err) {
            console.log(`[${NAME}] Error -> ${err.message}`);
            return res.status(500).json({ "message": "ไม่สามารถเชื่อมต่อฐานข้อมูลได้" })
        } else {
            if (req.body.username == null || req.body.password == null) {
                return res.status(200).json({ "message": "Please enter username and password." })
            } else {
                var sqlCheckSignIn = 'SELECT USERNAME, PASSWORD FROM users WHERE USERNAME = ? AND PASSWORD = ?'
                connection.query(sqlCheckSignIn, [req.body.username, req.body.password], function (err, results) {
                    if (err) {
                        console.log(`[${NAME}] sqlCheckSignIn Error -> ${err}`)
                        return res.status(200).json({ "error_message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                    }

                    if (!results.length) {
                        return res.status(401).json({ "message": "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง" })
                    }
                    
                    return res.status(200).json({ "message": "เข้าสู่ระบบสำเร็จ" })
                })
            }
        }
    })
})

app.listen(PORT, HOST);
console.log(`[${NAME}] Running on http://${HOST}:${PORT}`);