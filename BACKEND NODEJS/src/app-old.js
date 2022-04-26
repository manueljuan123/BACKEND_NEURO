const http = require('http')

// Request: Petición del cliente
// Response: Respuesta del servidor
const server = http.createServer((req, res) => {
    console.log('Un cliente se ha conectado')
    res.end()
})

server.listen('3000', () => {
    console.log("Servidor a la espera de conexion")
})