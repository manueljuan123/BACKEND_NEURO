const jwt = require('jsonwebtoken')
const bcryptjs  = require('bcryptjs')
const conexion = require('../config/database')

// Login preventivo, didáctico y simple
exports.PreventLogin = async (req, res) => {
        res.json({message:"success"})
}


// Login para un solo administrador
exports.AdminLogin = async (req, res) => {
    conexion.query(`SELECT * FROM admin WHERE user = ${conexion.escape(req.body.user)};`,
    (err, result) => {
        if (!result.length) {
            return res.status(400).send({
                message: "No se encuentra el usuario en la base de datos"
            });
        }
        bcryptjs.compare(req.body.password, result[0]['password'], (bErr, bResult) =>{
            if(bErr){
                return res.status(400).send({
                    message: "Username or password incorrect"
                });
            }
            if(bResult){
                const token = jwt.sign({
                    id: result[0].id,
                    user: result[0].user,
                }, process.env.JWT_SECRETO, {expiresIn: "1d"});
                
                return res.status(200).send({
                    message: "Login succesful",
                    token,
                    user: result[0]
                })
            }
    return res.status(401).send({
        message: "Username or password are incorrect"
            })
        } 
    )}
)}

/* Registro del único ADMIN, este registro no tiene formulario 
y fue creado desde código para que no haya necesidad de crear
un CRUD en el FRONT
*/
exports.OneRegister = async(req, res) =>{
    try {
        const user = req.body.user
        const password = req.body.password
        const email = req.body.email
        let passHash = await bcryptjs.hash(password, 8)

        // QUERY
        conexion.query('INSERT INTO admin SET ?',
         {  user:user,
            email:email,
            password:passHash}
            ,(error, res)=>{
                if(error){
                    console.log(error)
                }
            })
                res.send("Usuario ADMIN insertado correctamente")
    } catch (error) {
        console.log(error)
    }
    }
   
    
    
/* MIDDELWARE para asegurarse que el usuario esté logueado */
exports.EnsureResetToken = async (req, res, next) => {
    const resetHeader = req.headers['authorization'];
    console.log(resetHeader);
    if(typeof resetHeader !== 'undefined') {
              const bearerToken = resetHeader.split(" ")[1];
              req.token = bearerToken;
              next();
    }else{
        res.status(403).send({
            status: 403, 
            message:"No permitido"})
        
    }
        }
