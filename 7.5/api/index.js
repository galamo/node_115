const express = require("express")
const config = require("./config")
console.log(config)

const app = express()

app.get("/api/health-check", (req, res, next) => {
    console.log(req.query)
    res.send("Server is up and running")
})

// http://localhost:3000/api/authenticate?token=t12345 => 401
//http://localhost:3000/api/authenticate?token=t1234 => 200 

app.get("/api/authenticate", (req, res, next) => {
    const token = req?.query?.token
    if (token === "t1234") {
        return res.send("User Authorized")
    } else {
        return res.status(401).send("Sorry User is not Authorized")
    }
})
const users = []
app.get("/auth/register", (req, res, next) => {
    const userName = req.query.userName
    const password = req.query.password
    if (userName && password) {
        users.push({ userName, password })
        return res.send("User registered successfully")
    } else {
        return res.status(400).send("Missing UserName or Password")
    }
})
app.get("/users", (req, res, next) => {
    res.json(users)
})

app.listen(config.port, (e) => {
    if (e) {
        console.log(e)
    } else {
        console.log(`Listening to PORT: ${config.port}`)
    }
})