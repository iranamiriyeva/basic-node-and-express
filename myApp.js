let express = require('express')
let app = express()
const path = require('path')
require('dotenv').config()

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
app.use(middleware = (req, res, next) => {
    const data = req.method + " " + req.path + " - " + req.ip
    console.log(data)
    next()
})

 module.exports = app