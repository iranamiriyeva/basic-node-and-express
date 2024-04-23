let express = require('express')
let app = express()
const path = require('path')
require('dotenv').config()

//Solution11: Use body-parser to Parse POST Requests
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Solution2: Start a Working Express Server
// app.get("/", (req, res) => {
//     res.send("Hello Express")
// })

//Solution3: Serve an HTML File
// let absolutePath = __dirname + '/views/index.html'
// app.get("/", (req, res) => {
//     res.sendFile(absolutePath)
// })

//Solution4: Serve Static Assets
// app.use('/public', express.static(path.join(__dirname, 'public')))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })

//Solution5: Serve JSON on a Specific Route
// app.get('/json', (req, res) => {
//     res.json({"message": "Hello json"})
// })

//Solution6: Use the .env File
// let message
// app.get('/json', (req, res) => {
//     process.env.MESSAGE_STYLE === "uppercase" ? 
//         message = "Hello json".toUpperCase() : 
//         message = "Hello json"
//     res.json({"message": message})
// })

//Solution7: Implement a Root-Level Request Logger Middleware
// app.use(middleware = (req, res, next) => {
//     const data = req.method + " " + req.path + " - " + req.ip
//     console.log(data)
//     next()
// })

//Solution8: Chain Middleware to Create a Time Server
// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString()
//     next()
// }, (req, res) => {
//     res.send({time: req.time})
// })

// //Option for using middleware in multiple routes
// const middleware = (req, res, next) => {
//     req.time = new Date().toString()
//     next()
//   }
  
//   app.get('/now', middleware, (req, res) => {
//     res.send({time: req.time})
//   })

//Solution9: Get Route Parameter Input from the Client
// app.get('/:word/echo', (req, res) => {
//     res.send({echo: req.params.word})
// })

//Solution10: Get Query Parameter Input from the Client
// app.get('/name', (req, res) => {
//     res.json({name: `${req.query.first} ${req.query.last}`})
// })

//Solution12: Get Data from POST Requests
app.post('/name', (req, res) => {
    res.json({name: `${req.body.first} ${req.body.last}`})
})

 module.exports = app