const nodemailer = require("nodemailer")


// Esta ruta es para enviar PQRS a la IPS
exports.postPQRS = (req, res) => {
    const { tipo_persona, nombre, email, tipo_documento,
            numero_documento, direccion, celular, pqrs } = req.body

    try{
        if (tipo_persona && nombre && email && tipo_documento &&
             numero_documento && direccion && celular && pqrs){             
             var transporter = nodemailer.createTransport({
                 host: "smtp.gmail.com",
                 port: 465,
                 secure: true,
                 auth: {
                     user: process.env.EMAIL_MENSAJERO_NEURO,
                     pass: process.env.PASS_MENSAJERO_NEURO
                 }
             });

             var mailOptions = {
                 from: "Remitente",
                 to: process.env.RECEPCION_PQRS_ENCUESTA,
                 subject: "PQRS",
                 html: `<h1> Revise por favor la página web debido a que hay una nueva PQRS </h1>
                    <h2>Tipo de persona: ${ req.body.tipo_persona}</h2>
                    <h2>Nombre: ${ req.body.nombre }</h2>
                    <h2>Email: ${ req.body.email }</h2>
                    <h2>Tipo identificación ${ req.body.tipo_documento }</h2>
                    <h2>Número identificación: ${ req.body.numero_documento }</h2>
                    <h2>Dirección: ${ req.body.direccion }</h2>
                    <h2>Celular: ${ req.body.celular }</h2>
                    <h2>PQRS: ${ req.body.pqrs }</h2> 
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
                return res.status(400).json({ status: 400, message: "Correo no enviado por error de respuesta", mensaje_enviar: req.body})
            }
            
            
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}