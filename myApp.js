let express = require('express')
let app = express()
const path = require('path')

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
app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})




































 module.exports = app;
