const http = require("http")

const hostName = '127.0.0.1'

const port = 3000

const server = http.createServer((request, response) => {
  response.status = 200
  response.write("Hola mundo, en nodeJs")
  response.end()
})


server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`)
})