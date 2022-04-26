const nodemailer = require("nodemailer")
const bcryptjs = require('bcryptjs')
const conexion = require('../config/database')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs/dist/bcrypt")


/* Petición de contraseña */
exports.PeticionPassword = async(req, res) =>{
    const { email } = req.body;
    const { reset_token } = req.headers;

    conexion.query('SELECT * FROM admin',
    (err, result) => {
        const UsrId = result[0]['id'];
        const UsrEmail = result[0]['email'];
        
        if( email !== UsrEmail){
            return res.status(400).json({ status: 400, message: "Si hay un usuario con este correo, se enviará la información de recuperación de contraseña allí.", mensaje_enviar: req.body})

        }else{
            
            try {
                if (email){
                    const reset_token = jwt.sign({
                        id: UsrId,
                        email: UsrEmail
                    }, process.env.JWT_SECRETO, {expiresIn: '15m'});


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
                        subject: "Cambio de contraseña",
                        html: `<h1> Ha solicitado un cambio de contraseña desde la página web, si no ha sido usted, por favor, haga caso omiso.</h1>
                           <h2>Contraseña será enviada al siguiente email: ${ process.env.ANGULAR_LINK }</h2>

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
                    return res.status(200).json({ status: 200, message: "Correo enviado exitosamente", mensaje_enviar: req.body, reset_token: reset_token})

                }
                else {
                    return res.status(400).json({ status: 400, message: "Correo no enviado por error de respuesta", mensaje_enviar: req.body})
                }    
                
            } catch (error) {
                return res.status(400).json({ status: 400, message: e.message })
            }
            

            //const link = `http://localhost:5000/email/reset_password/${UsrId}/${token}`
            
        }
    })
}

/* Restablecimiento de contraseña */
exports.RestablecerPassword = async(req, res) => {
    const  newPassword  = req.body.newPassword;
    const  newPasswordHash = await bcrypt.hash(newPassword, 8)

    conexion.query('UPDATE admin SET password = ?', newPasswordHash,
    async (err, result) => {
            const newPassword = req.body.newPassword
            const confirmNewPassword = req.body.confirmNewPassword
            const newPasswordHash = await bcryptjs.hash(newPassword, 8)
        
            conexion.query(`UPDATE admin SET password = ?`, newPasswordHash,
            (err, result) => {
                if(newPassword != confirmNewPassword){
                    res.status(400).send({
                        status:400,
                        message:"Contraseñas no coinciden"
                    })                }else{
                    res.status(200).send({
                        status:200,
                        message:"Contraseña actualizada con éxito"
                    })
                }
            })
    })
}

