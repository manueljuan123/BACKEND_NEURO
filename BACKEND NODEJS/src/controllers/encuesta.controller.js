const conexion = require('../config/database')
const nodemailer = require("nodemailer")

// Esta ruta de e-mail permite enviar encuesta de satisfacción a correo
exports.postEncuesta = (req, res) => {
    const { experiencia, recomendacion, sugerencia } = req.body

    try{
        if (experiencia && recomendacion && sugerencia){

           conexion.query('INSERT INTO encuesta SET ?',
           { experiencia:experiencia,
             recomendacion:recomendacion,
             sugerencia:sugerencia }
             ,(error, res)=>{
                 if(error){
                     console.log(error)
                 }
             })
                console.log("Datos insertados correctamente")    
                
             var transporter = nodemailer.createTransport({
                 host: "smtp.gmail.com",
                 port: 465,
                 secure: true,
                 auth: {
                     user: "mensajeroneuroimagenes@gmail.com",
                     pass: "tlzvlpvafaiazani"
                 }
             });

             var mailOptions = {
                 from: "Remitente",
                 to: "juanmanuelyatemendez@gmail.com",
                 subject: "Encuesta",
                 html: `<h1> Revise por favor la página web debido a que hay una nueva PQRS </h1>
                    <h2>Experiencia: ${ req.body.experiencia}</h2>
                    <h2>Recomendación: ${ req.body.recomendacion }</h2>
                    <h2>Sugerencia: ${ req.body.sugerencia }</h2>

                    `
             }

             transporter.sendMail(mailOptions, (error) => {
                 if (error) {
                     res.status(500).send(error.message)
                 } else {
                     console.log("Email enviado exitosamente")
                     res.status(200).jsonp(req.body);
                 }
             });
             return res.status(200).json({ status: 200, message: "Correo enviado exitosamente", mensaje_enviar: req.body})
             
            } else {
                return res.status(400).json({ status: 400, message: "Petición errada, hacen falta datos requeridos", mensaje_enviar: req.body})
            }
            
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}

/*Esta ruta permite obtener todas las encuestas de satisfa */
exports.ObtenerEncuestas = async (req, res) => {
    conexion.query('SELECT * FROM encuesta', function (err, result){
        if(err) throw err;
        res.json(result)
    })
}