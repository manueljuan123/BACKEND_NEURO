const nodemailer = require("nodemailer");

// Esta ruta de e-mail es para que el paciente consulte
exports.postConsulta = (req, res) => {
    const { nombre, email, tipo_documento, numero_documento, celular1,
            celular2, eps, servicio, consulta} = req.body
    try{
        if (nombre && email && tipo_documento && numero_documento
            && celular1 && eps && servicio && consulta) {

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
            to: process.env.RECEPCION_CONSULTAS,
            subject: "SOLICITUD DE AGENDAMIENTO DE CITA",
            html: `<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><!-- Define el contenido basado en codificación utf-8 (funcionará cuando se vea en la web) -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Estándar mobile permite elegir como se mostrará nuestra página en los navegadores de estos de dispositivos móviles, especificando el ancho que tendrá la página dentro del navegador -->
		<title>Responsive</title><!-- Titulo de el correo (funcionará cuando se vea en la web) -->
		<style type="text/css">
		/* Estilos para clientes especificos */
			 #outlook a {padding:0;} /* Fuerza al cliente de Outlook a generar un boton para ver en la web de forma nativa. */
			 body{width:100% !important;margin: 0 !important;padding: 0 !important;} .ReadMsgBody{width:100%; !important} .ExternalClass{width:100% !important;}  /* Fuerza a Hotmail a mostrar el email a su ancho completo */
		 
		 /* Plataformas Webkit y Windows Mobile. */
			 body{-webkit-text-size-adjust:none; -ms-text-size-adjust:none;} /* Previene a la plataforma para aplicaciones Webkit y Windows Mobile que reemplace las fuentes determinadas en los estilos. */
			img {outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}
			 a img {border:none;}
			 p {margin: 0px 0px !important;}
			 table td {border-collapse: collapse;}
			 table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
			 #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
		 
		/*################################################*/
         /* Resolución 640px (iPad) */
         /*################################################*/
			 @media only screen and (max-width: 640px) {
				 a[href^="tel"], a[href^="sms"] { text-decoration: none;color: #ffffff; pointer-events: none;cursor: default;}
				 .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] { text-decoration: default; color: #ffffff !important;pointer-events: auto;cursor: default;}
				 table[class=devicewidth] {width: 440px!important;text-align:center!important;}
				 table[class=devicewidthinner] {width: 440px!important;text-align:center!important;}
				 td[class="menu"]{text-align:center !important;}
			 }
         /*##############################################*/
         /* Resolución 480px (iPhone) */
         /*##############################################*/
			 @media only screen and (max-width: 480px) {
				 a[href^="tel"], a[href^="sms"] {text-decoration: none; color: #ffffff;pointer-events: none;cursor: default;}
				 .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {text-decoration: default;color: #ffffff !important;  pointer-events: auto; cursor: default;}
				 table[class=devicewidth] {width: 280px!important;text-align:center!important;}
				 table[class=devicewidthinner] {width: 280px!important;text-align:center!important;}
				 td[class=titulo] {width: 280px!important;text-align:center!important;}
				 img[class="bigimage"]{width: 260px!important;}
				 
			 }
		</style>
	 </head>
	<body>
		<div class="block">
		   <!-- Inicia Bloque 1-->
			<table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
			  <tbody>
				 <tr>
					<td>
					   <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
						  <tbody>
							 <!-- Espacio -->
							 <tr>
								<td width="100%" height="5"></td>
							 </tr>
							 <!-- /Espacio -->
							   <!-- Contenido -->
							 <tr>
								<td align="right" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 10px;color: #999999">
								   Si no puede ver este email haga <a class="fide-browser-view" href="#" style="text-decoration: none; color: #0db9ea">click aquí</a> 
								</td>
							 </tr>
							  <!-- /Contenido -->
							 <!-- Espacio -->
							 <tr>
								<td width="100%" height="5"></td>
							 </tr>
							 <!-- /Espacio -->
						  </tbody>
					   </table>
					</td>
				 </tr>
			  </tbody>
		   </table>
		   <!-- Fin Bloque 1 -->
		</div>
		<div class="block">
		   <!-- Bloque 2-->
			<table width="100%" bgcolor="#fafafa" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
			  <tbody>
				 <tr>
					<td width="100%">
					   <table width="600" bgColor="#fafafa" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
						  <tbody>
							 <!-- Espacio -->
							 <tr>
								<td width="100%" height="20"></td>
							 </tr>
							 <!-- /Espacio -->
						  </tbody>
				   </table>
								</td>
							 </tr>
						  </tbody>
					   </table>
					</td>
				 </tr>
			  </tbody>
		   </table>
		   <!-- Fin Bloque 2-->
		</div>
		<div class="block">
		   <!-- Bloque 2-->
			<table width="100%" bgcolor="#fafafa" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
			  <tbody>
				 <tr>
					<td width="100%">
					   <table width="600" bgColor="#fafafa" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
						  <tbody>
							<!-- Espacio -->
							  <tr>
								<td height="20"></td>
							 </tr>
							 <!-- /Espacio -->
							 	<tr>
						 <td>
						 <!-- ESLOGAN -->
								<tr>
									<td width="100" height="100" align="center" style="font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #000000;line-height: 24px;" align="center" class="menu" st-content="menu">
										<h2 style="text-decoration: none; color: #B7D93D; font-weight: bold;">SOCIEDAD DE NEUROCIENCIAS E IMÁGENES DIAGNÓSTICAS <br>
											<strong style="text-decoration: none; color: #2E338C; font-weight: bold; margin-top: 7px; font-size: 20px;">NEUROIMAGENES S.A</strong></h2>
									</td>
								</tr>
						  <!-- /ESLOGAN -->
                        </td>
							<td width="500" height="50" align="right" style="font-family: Helvetica, arial, sans-serif; font-size: 15px;color: #2c3e50">
							  &nbsp;
							</td>
							 </tr>
							<tr>
							<td width="400" height="50" align="left" style="font-family: Helvetica, arial, sans-serif; text-transform: uppercase;font-size: 20px; color: #2E338C; font-weight: bold;">
							  ${req.body.servicio}
							</td>
							 </tr>
							 <tr>
							<td width="500" height="20" align="left" style="font-family: Helvetica, arial, sans-serif; font-size: 18px;color: #95a5a6">
							 Un usuario dentro de la página web ha diligenciado el formato para solicitar el anterior servicio, recuerde tomar sus datos correctamente para que se haga un
							 efectivo contacto.
							</td>
							 </tr>
							 <!-- Espacio -->
							 <tr>
								<td width="100%" height="5"></td>
							 </tr>
							  <!-- Espacio -->
							 <tr>
								<td width="100%" height="30"></td>
							 </tr>
	
							<!-- Espacio -->
							 <tr>
								<td width="100%" height="30"></td>
							 </tr>
							 <!-- /Espacio -->
						  </tbody>
				   </table>
								</td>
							 </tr>
						  </tbody>
					   </table>
					</td>
				 </tr>
			  </tbody>
		   </table>
		   <!-- Fin Bloque 2-->
		</div>
		<div class="block">
		   <!-- Bloque 2-->
			<table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
			  <tbody>
				 <tr>
					<td width="100%">
					   <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
						  <tbody>
							<!-- Espacio -->
							  <tr>
								<td height="20"></td>
							 </tr>
							 <!-- /Espacio -->
							 <tr>
								 <td>

									   <!-- Espacio invisible para moviles -->
									   <table align="left" border="0" cellpadding="0" cellspacing="0" >
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="30" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
									   <!-- Fin espacio invisible para moviles -->
									   <table width="330" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                          <tbody>
                                             <!-- Titulo -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 20px; color: #2E338C; font-weight: bold; text-align:left;line-height: 20px; st-title="leftimage-title">
                                                   DATOS PACIENTE
                                                </td>
                                             </tr>
                                             <!-- /Titulo -->
                                             <!-- Espacio -->
                                             <tr>
                                                <td width="100%" height="20"></td>
                                             </tr>
                                             <!-- /Espacio -->
                                             <!-- Contenido -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #505050; text-align:left;line-height: 24px; text-transform: uppercase; st-content="leftimage-paragraph">
                                                   <ul>
													   <li>Nombre: <strong>${ req.body.nombre}</strong></li>
													   <li>Email: <strong>${ req.body.email}</strong></li>
													   <li>Tipo Documento: <strong>${ req.body.tipo_documento}</strong></li>
													   <li>Número Documento: <strong>${ req.body.numero_documento}</strong></li>
													   <li>Celular: <strong>${ req.body.celular1}</strong></li>
													   <li>Alternativo: <strong>${ req.body.celular2}</strong></li>
													   <li>Servicio: <strong>${ req.body.servicio}</strong></li>
													   <li>EPS: <strong>${ req.body.eps}</strong></li>
													   <li>Especificaciones: <strong>${ req.body.consulta}</strong></li>
												   </ul>
                                                </td>
                                             </tr>
                                             <!-- /Contenido -->
											 <!-- Espacio -->
                                             <tr>
                                                <td width="100%" height="20"></td>
                                             </tr>
											 <!-- /Espacio -->
                                          </tbody>
                                       </table>
								</td>
							 </tr>
						  </tbody>
					   </table>
					</td>
				 </tr>
			  </tbody>
		   </table>
		   <!-- Fin Bloque 2-->
		</div>
		<div class="block">
		   <!-- Bloque 3-->
			<table width="100%" bgcolor="#fafafa" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
			  <tbody>
				 <tr>
					<td width="100%">
					   <table width="600" cellpadding="0" cellspacing="0" bgcolor="#fafafa" border="0" align="center" class="devicewidth" >
						  <tbody>
							<!-- Espacio -->
							  <tr>
								<td height="20"></td>
							 </tr>
							 <!-- Espacio -->
							 <tr>
								 <td>
									   <!-- Espacio invisible para moviles -->
									   <table align="center" border="0" cellpadding="0" cellspacing="0" >
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="30" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
									   <!-- Fin espacio invisible para moviles -->
									   <table width="600" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                          <tbody>
                                             <!-- Titulo -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 20px; color: #2E338C; font-weight: bold;; text-align:left;line-height: 20px;" st-title="leftimage-title">
                                                   INFORMACIÓN RELEVANTE
                                                </td>
                                             </tr>
                                             <!-- /Titulo-->
                                             <!-- Espacio -->
                                             <tr>
                                                <td width="100%" height="20"></td>
                                             </tr>
                                             <!-- /Espacio -->
                                             <!-- Cotenido -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 15px; color: #95a5a6; text-align:left;line-height: 24px;" st-content="leftimage-paragraph">
                                                   Recuerde que estos datos deben ser tratados con sumo cuidado, el proveedor del medio para la comunicación de los mismos no se hace responsable
												   de errónea administración de los mensajes. Si no es necesario guardar estos datos en este correo como medida de archivo, por favor, elimine este
												   e-mail cuando no le sea útil como medida de prevención.
                                                </td>
                                             </tr>
                                             <!-- /Contenido-->
                                             <!-- Espacio -->
                                             <tr>
                                                <td width="100%" height="10"></td>
                                             </tr>
											 <!-- /Espacio -->
											 <!-- Espacio -->
                                             <tr>
                                                <td width="100%" height="20"></td>
                                             </tr>
											 <!-- /Espacio -->
                                          </tbody>
                                       </table>
								</td>
							 </tr>
						  </tbody>
					   </table>
					</td>
				 </tr>
			  </tbody>
		   </table>
		   <!-- Fin Bloque 3 -->
		</div>
		<div class="block">
		   <!-- Bloque 2-->
			<table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
			  <tbody>
				 <tr>
					<td width="100%">
					   <table width="600" bgColor="#ffffff" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
						  <tbody>
						  <!-- Espacio -->
							  <tr>
								<td height="20"></td>
							 </tr>
							 <!-- /Espacio -->
							 <!-- menu -->
							 <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
								<tbody>
								<tr>
									<td width="270" valign="center" style="font-family: Helvetica, Arial, sans-serif;font-size: 18px; color: #000000;line-height: 24px; padding: 10px 0;" align="center" class="menu" st-content="menu">
									<a href="https://neuroimagenes.com/" style="text-decoration: none; color: #2E338C; font-weight: bold;">NUESTROS PACIENTES <br /> NUESTRA PRIORIDAD</a>
									</td>
								</tr>
							</tbody>
							 </table>
							 <!-- Fin del Menu -->
						
							<!-- Espacio -->
							  <tr>
								<td height="20"></td>
							 </tr>
							 <!-- /Espacio -->
							<tr>
								<td width="400" align="center" style="font-family: Helvetica, arial, sans-serif; font-size: 15px;color: #95a5a6">
									Calle 3 norte No. 16-17 - Barrio Nueva Cecilia. Armenia, Quindío
								</td>
							</tr>
							<!-- Espacio -->
							  <tr>
								<td height="10"></td>
							 </tr>
							 <!-- /Espacio -->
							 <tr>
								<td width="400" align="center" style="font-family: Helvetica, arial, sans-serif; font-size: 15px;color: #95a5a6">
									administracion@neuroimagenes.com
								</td>
							</tr>
							</tr>
							<!-- Espacio -->
							  <tr>
								<td height="20"></td>
							 </tr>
							 <!-- /Espacio -->
							</table>
						  </tbody>
				   </table>
								</td>
							 </tr>
						  </tbody>
					   </table>
					</td>
				 </tr>
			  </tbody>
		   </table>
		   <!-- Fin Bloque 2-->
		</div>
		
	</body>
<html>
            </body>
            </html>             
                    `
        }

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    res.status(500).send(error.message)
                } else {
                    console.log("Email enviado exitosamente")
                    res.status(200).jsonp(req.body.body);
                }
            
                });
                return res.status(200).json({ status: 200, message: "Correo enviado exitosamente", mensaje_enviar: req.body.body })
            
            } else {
                res.send("Petición errada, hacen falta datos requeridos")
            }
            
    } catch (e) {

                return res.status(400).json({ status: 400, message: e.message })
        }
}


