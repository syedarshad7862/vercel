const express = require('express')
const app = express()
const port = 3000


app.use(express.static('templates'))
app.use(express.static('public'))

app.get('/', (req, res) => {
      res.sendFile("templates/index.html", { root: __dirname })
    })

// app.get('/new', (req, res) => {
//       res.sendFile("templates/newindex.html", { root: __dirname })
//     })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})