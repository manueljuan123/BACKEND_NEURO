const conexion = require('../config/database')
const nodemailer = require("nodemailer")


// Esta ruta es para enviar PQRS a la IPS
exports.postPQRS = (req, res) => {
    const { tipo_persona, nombre, email, tipo_documento,
            numero_documento, direccion, celular, pqrs } = req.body

    try{
        if (tipo_persona && nombre && email && tipo_documento &&
             numero_documento && direccion && celular && pqrs){
            
            // Enviar datos de PQRS a base de datos    
            conexion.query('INSERT INTO pqrs SET ?',
            {tipo_persona:tipo_persona,
             nombre:nombre,
             email:email,
             tipo_documento:tipo_documento,
             numero_documento:numero_documento,
             direccion:direccion,
             celular:celular,
             pqrs:pqrs}
             ,(error, res)=>{
                 if(error){
                     console.log(error)
                 }
             })
                console.log("Insertada PQRS correctamente")
             
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

// Contestar a las PQRS
exports.ResPQRS = (req, res) => {
    const { fecha, nombre_pqrs, email_pqrs, respuesta_pqrs, pqrs_id } = req.body

    try{
        if(fecha && nombre_pqrs && email_pqrs && respuesta_pqrs && pqrs_id){
            conexion.query('INSERT INTO pqrsRes SET ?',
            {fecha:fecha,
             nombre_pqrs:nombre_pqrs,
             email_pqrs:email_pqrs,
             respuesta_pqrs:respuesta_pqrs,
             pqrs_id: pqrs_id}
             ,(error, res)=>{
                 if(error){
                     console.log(error)
                 }
             })
             console.log("Respuesta a PQRS enviada correctamente")

               
             var transporter = nodemailer.createTransport({
                 host: "smtp.gmail.com",
                 port: 465,
                 secure: true,
                 auth: {
                     user:"mensajeroneuroimagenes@gmail.com",
                     pass: "tlzvlpvafaiazani"
                 }
             });


             var mailOptions = {
                 from: "Remitente",
                 to: req.body.email_pqrs,
                 subject: `Respuesta a PQRS`,
                 html: `<h1> Revise por favor la página web debido a que hay una nueva PQRS </h1>
                 <h2>Fecha: ${ req.body.fecha}</h2>
                 <h2>Nombre: ${ req.body.nombre_pqrs }</h2>
                 <h2>Email: ${ req.body.email_pqrs }</h2>
                 <h2>Respuesta: ${ req.body.respuesta_pqrs }</h2>
                 `
             }

             transporter.sendMail(mailOptions, (error) =>{
                 if(error){
                     res.status(500).send(error.message)
                 }else{
                     console.log("Email enviado exitosamente")
                     res.status(200).jsonp(req.body)
                 }
             });
             
             return res.status(200).json({ status: 200, message: "Correo enviado exitosamente", mensaje_enviar: req.body})

        }   else {
            return res.status(400).json({ status: 400, message: "Ha ocurrido un error", mensaje_enviar: req.body})
        }
    } catch (e) {
        return res.status(400).json({ status:400, message: e.message })
    }
}

// Obtener todas las PQRS.
exports.ObtenerPQRS = async (req, res) => {
    conexion.query('SELECT * FROM pqrs', function(err, result, fields){
        if (err) throw err;
        res.json(result)
    })}

// Obtener PQRS desde ID
exports.OnePQRS = async (req, res) => {
    conexion.query('SELECT * FROM pqrs WHERE id = ?', req.params.id, function(err, result){
        if (err) throw err;
        res.json(result)
    })

}
