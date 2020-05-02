const express = require("express")
const app = express()
const hostName = '127.0.0.1'
const port = 3000
// ! req = request - recibir
// ! res = response - enviar

// ! Config Server

// ! Midleware

function logger (req, res, next) {
  if(req.token) {
    next()
  }
  console.log("error")
  res.send("User no loggeado")
}

app.use(express.json())
app.use(logger)

// ! Router

app.get('/',(req, res) => {
  res.send('Hellow World Express.js !')
})

// ! users

// ! Select
app.get('/users', (req, res) => {
  console.log("users")
  res.json([
    {
      username: "Manny",
      name: "Emannuel"
    },
    {
      username: "Corpus",
      name: "Caleb"
    },
    {
      username: "El may",
      name: "Oscar"
    }
  ])
})

// ! Insert Into
app.post('/users', (req, res) => {
  console.log("data", req.body)
  res.send("Se creo un usuario con exito")
})

// ! Update
app.put('/users/:id', (req, res) => {
  console.log("data", req.body)
  res.send(`El usuario ${req.params.id} se actualizo con exito`)
})

// ! Delete
app.delete('/users/:id', (req, res) => {
  res.send(`El usuario ${req.params.id}, se elimino con exito`)
})


app.listen(port, (req, res) => {
  console.log(`Server running http://${hostName}:${port}`)
})
