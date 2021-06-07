const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const jwt = require("jsonwebtoken");

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
    host: '35.238.114.100',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'food_recommendation'
});

// API Sign In
// Format JSON //
// {
//     "username": "test",
//     "password": "test"
// }
// Format JSON //
app.post('/signin', (req, res) => {
    mysqlPool.getConnection(async function (err, connection) {
        if (err) {
            console.log(`[${NAME}] Error -> ${err.message}`);
            return res.status(500).json({ "isError": true, "message": "ไม่สามารถเชื่อมต่อฐานข้อมูลได้" })
        } else {
            if (req.body.username == null || req.body.password == null) {
                return res.status(500).json({ "isError": true, "message": "กรุณากรอกชื่อผู้ใช้งานและรหัสผ่าน" })
            } else {
                var sqlCheckSignIn = 'SELECT USERSID, USERNAME, NAME, SURNAME FROM users WHERE USERNAME = ? AND PASSWORD = ?'
                connection.query(sqlCheckSignIn, [req.body.username, req.body.password], function (err, results) {
                    if (err) {
                        console.log(`[${NAME}] sqlCheckSignIn Error -> ${err}`)
                        return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                    }

                    if (!results.length) {
                        return res.status(401).json({ "isError": true, "message": "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง" })
                    }

                    const payload = {
                        _id: results[0].USERSID,
                        username: results[0].USERNAME,
                        fullname: results[0].NAME + ' ' + results[0].SURNAME,
                        iat: new Date().getTime(), //มาจากคำว่า issued at time (สร้างเมื่อ)
                        exp: Math.floor(Date.now() / 1000) + (60 * 60)
                    };

                    jwt.sign(payload, "SECRET", function (err, token) {
                        if (err) {
                            return res.status(401).json({ "accesstoken": false, "message": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" })
                        } else {
                            return res.status(200).json({ "accesstoken": token, "user_profile": { "id": results[0].USERSID, "username": results[0].USERNAME, "fullname": results[0].NAME + ' ' + results[0].SURNAME }, "message": "เข้าสู่ระบบสำเร็จ" })
                        }
                    })
                })
            }
        }
    })
})

// API Sign UP
// Format JSON //
// {
//     "username": "test",
//     "password": "1234",
//     "confirm_password": "1234",
//     "email": "test@gmail.com",
//     "firstname": "test",
//     "lastname": "test",
//     "gender": "male",
//     "birthday": "15/03/1998",
//     "weight": 58,
//     "height": 160,
//     "religion": "พุทธ",
//     "actPerWeek": "0"
// }
// Format JSON //
app.post('/signup', (req, res) => {
    mysqlPool.getConnection(async function (err, connection) {
        if (err) {
            console.log(`[${NAME}] Error -> ${err.message}`);
            return res.status(500).json({ "isError": true, "message": "ไม่สามารถเชื่อมต่อฐานข้อมูลได้" })
        } else {
            // Variable
            let username = req.body.username
            let password = req.body.password
            let confirm_password = req.body.confirm_password
            let email = req.body.email
            let firstname = req.body.firstname
            let lastname = req.body.lastname
            let gender = req.body.gender
            let birthday = req.body.birthday
            let weight = req.body.weight
            let height = req.body.height
            let religion = req.body.religion
            let actPerWeek = req.body.actPerWeek

            // Validate
            if (username == null || username == '') {
                return res.status(200).json({ "message": "กรุณากรอกชื่อผู้ใช้งาน" })
            }

            if (password == null || password == '') {
                return res.status(200).json({ "message": "กรุณากรอกรหัสผ่าน" })
            }

            if (confirm_password == null || confirm_password == '') {
                return res.status(200).json({ "message": "กรุณากรอกยืนยันรหัสผ่าน" })
            }

            if (password != confirm_password) {
                return res.status(200).json({ "message": "กรุณากรอกรหัสผ่านและยืนยันรหัสผ่านให้ตรงกัน" })
            }

            if (email == null || email == '') {
                return res.status(200).json({ "message": "กรุณากรอกอีเมล์" })
            }

            if (firstname == null || firstname == '') {
                return res.status(200).json({ "message": "กรุณากรอกชื่อ" })
            }

            if (lastname == null || lastname == '') {
                return res.status(200).json({ "message": "กรุณากรอกนามสกุล" })
            }

            if (gender == null || gender == '') {
                return res.status(200).json({ "message": "กรุณาระบุเพศ" })
            }

            if (birthday == null || birthday == '') {
                return res.status(200).json({ "message": "กรุณาระบุวันเกิด" })
            }

            if (weight == null || weight == '') {
                return res.status(200).json({ "message": "กรุณากรอกน้ำหนัก" })
            }

            if (height == null || height == '') {
                return res.status(200).json({ "message": "กรุณากรอกส่วนสูง" })
            }

            if (religion == null || religion == '') {
                return res.status(200).json({ "message": "กรุณาระบุศาสนา" })
            }

            if (actPerWeek == null || actPerWeek == '') {
                return res.status(200).json({ "message": "กรุณาระบุกิจกรรม" })
            }
            // Validate

            // คำนวณอายุ (Format 15/03/2021)
            let birthdaySplit = birthday.split('/')
            let birthdayNewFormat = birthdaySplit[2] + birthdaySplit[1] + birthdaySplit[0]
            let ageSplit = moment(birthdayNewFormat, "YYYYMMDD").fromNow(true).split(' ')
            let age = parseInt(ageSplit[0])

            // คำนวณ BMR
            // เพศชาย
            let bmr
            if (gender.toUpperCase() == "MALE") {
                bmr = 66 + (13.7 * parseInt(weight)) + (5 * parseInt(height)) - (6.8 * age)
            } else if (gender.toUpperCase() == "FEMALE") { // เพศหญิง
                bmr = 665 + (9.6 * parseInt(weight)) + (1.8 * parseInt(height)) - (4.7 * age)
            }

            // คำนวณ TDEE
            let tdee
            actPerWeek = parseInt(actPerWeek)
            if (actPerWeek == 0) {
                tdee = bmr * 1.2
            } else if (actPerWeek >= 1 && actPerWeek <= 3) {
                tdee = bmr * 1.375
            } else if (actPerWeek >= 3 && actPerWeek <= 5) {
                tdee = bmr * 1.55
            } else if (actPerWeek >= 6 && actPerWeek <= 7) {
                tdee = bmr * 1.725
            } else {
                tdee = bmr * 1.9
            }

            mysqlPool.getConnection(function (err, connection) {
                if (err) {
                    console.log(`[${NAME}][API SIGNUP] SQL CONNECTION ERROR -> ${err}`);
                    return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                }

                connection.beginTransaction(function (err) {
                    if (err) {
                        console.log(`[${NAME}][API SIGNUP] SQL BEGIN TRANSACTION ERROR -> ${err}`);
                        return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                    }

                    // Prepare insert users
                    let birthDate = birthdaySplit[2] + '-' + birthdaySplit[1] + '-' + birthdaySplit[0]
                    var sqlInsertUsers = 'INSERT INTO users (Username, Password, Name, Surname, Birthdate, Gender) VALUES (?, ?, ?, ?, ?, ?)'
                    connection.query(sqlInsertUsers, [username, password, firstname, lastname, birthDate, gender], function (err) {
                        if (err) {
                            connection.rollback(function () {
                                console.log(`[${NAME}][API SIGNUP] SQL INSERT ERROR -> ${err}`);
                                return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                            })
                        }

                        var sqlSelectUserId = 'SELECT UsersID FROM users WHERE Username = ?'
                        connection.query(sqlSelectUserId, [username], function (err, results) {
                            if (err) {
                                connection.rollback(function () {
                                    console.log(`[${NAME}][API SIGNUP] SQL INSERT ERROR -> ${err}`);
                                    return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                                })
                            }

                            if (!results.length) {
                                return res.status(404).json({ "isError": false, "message": "ไม่พบข้อมูลผู้ใช้งาน" })
                            }

                            // Prepare insert users_update_info
                            let userId = results[0].UsersID
                            var sqlInsertUsersInfo = 'INSERT INTO users_update_info (UsersID, Weight, Height, BMR, TDEE, ActPerWeek) VALUES (?, ?, ?, ?, ?, ?)'
                            connection.query(sqlInsertUsersInfo, [userId, weight, height, bmr, tdee, actPerWeek], function (err) {
                                if (err) {
                                    connection.rollback(function () {
                                        console.log(`[${NAME}][API SIGNUP] SQL INSERT ERROR -> ${err}`);
                                        return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                                    })
                                }

                                connection.commit(function (err) {
                                    if (err) {
                                        connection.rollback(function () {
                                            console.log(`[${NAME}][API SIGNUP] SQL COMMIT ERROR -> ${err.message}`);
                                            return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                                        })
                                    }

                                    console.log(`[${NAME}][API SIGNUP] -> "SIGN UP SUCCESS"`);

                                    return res.status(200).json({ "isError": false, "message": "สมัครสมาชิกสำเร็จ" })
                                })
                            })
                        })
                    })
                })
            })

        }
    })
})

// API MENU RECOMMEND
// Format JSON //
// {
//     "users_id": "5"
// }
// Format JSON //
app.post('/menu/recommend', (req, res) => {
    mysqlPool.getConnection(async function (err, connection) {
        if (err) {
            console.log(`[${NAME}] Error -> ${err.message}`);
            return res.status(500).json({ "isError": true, "message": "ไม่สามารถเชื่อมต่อฐานข้อมูลได้" })
        } else {
            let userId = req.body.users_id

            // Valiadate

            // คำนวณแคลลอรี่ต่อมื้อ
            var sqlGetTDEE = "SELECT TDEE FROM users_update_info WHERE UsersID = ?"
            connection.query(sqlGetTDEE, [userId], function (err, results) {
                if (err) {
                    console.log(`[${NAME}] sqlGetTDEE Error -> ${err}`)
                    return res.status(500).json({ "isError": true, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                }

                if (!results.length) {
                    return res.status(404).json({ "isError": true, "message": "ไม่พบข้อมูล TDEE ของผู้ใช้งาน" })
                }

                let tdee = results[0].TDEE
                let calTDEE = tdee - 300
                let caloriesPerPotion = parseInt(Math.round(calTDEE / 3))

                // แสดงเมนูแนะนำ
                var sqlGetMenuRecommend = "SELECT DISHSID, DISH CALORIES FROM dishs WHERE CALORIES <= ?"
                connection.query(sqlGetMenuRecommend, [caloriesPerPotion], function (err, results) {
                    if (err) {
                        console.log(`[${NAME}] sqlGetMenuRecommend Error -> ${err}`)
                        return res.status(500).json({ "isError": false, "message": "ไม่สามารถทำรายการได้เนื่องจากเกิดจากความผิดพลาดของระบบ" })
                    }

                    if (!results.length) {
                        return res.status(404).json({ "isError": true, "message": "ไม่พบเมนูแนะนำสำหรับผู้ใช้งาน" })
                    }

                    // สุ่มเมนูสำหรับแนะนำ
                    let randomMenu = Math.floor(Math.random() * results.length)

                    return res.status(200).json({ "isError": false, "caloriesPerPotion": caloriesPerPotion, "menuRecommend": results[randomMenu] })
                })
            })
        }
    })
})

app.listen(PORT, HOST);
console.log(`[${NAME}] Running on http://${HOST}:${PORT}`);