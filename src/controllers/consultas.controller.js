const nodemailer = require("nodemailer")


// Esta ruta de e-mail es para que el paciente consulte
exports.postConsulta = (req, res) => {
    const { nombre, email, tipo_documento, numero_documento, celular1,
            celular2, eps, servicio, mensaje} = req.body
    try{
        if (nombre && email && tipo_documento && numero_documento
            && celular1 && eps && servicio && mensaje) {

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
            to: process.env.RECEPCION_CONSULTAS, //"citas@neuroimagenes"
            subject: "Actualización Consultas",
            html: `<h1> Revise por favor la página web debido a que hay una nueva consulta </h1>
                    <h2>Nombre: ${ req.body.nombre}</h2>
                    <h2>Email: ${ req.body.email }</h2>
                    <h2>Tipo de documento: ${ req.body.tipo_documento }</h2>
                    <h2>Número de documento: ${ req.body.numero_documento }</h2>
                    <h2>Celular 1: ${ req.body.celular1 }</h2>
                    <h2>Celular alternativo: ${ req.body.celular2 }</h2>
                    <h2>Servicio a solicitar: ${ req.body.servicio }</h2>
                    <h2>eps: ${ req.body.eps }</h2>
                    <h2>Mensaje ${ req.body.mensaje }</h2>            
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
                return res.status(200).json({ status: 200, message: "Correo enviado exitosamente", mensaje_enviar: req.body })
            
            } else {
                res.send("Petición errada, hacen falta datos requeridos")
            }
            
    } catch (e) {

                return res.status(400).json({ status: 400, message: e.message })
        }
}


