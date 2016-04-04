<?php
//Importamos las variables del formulario
foreach($_POST as $k => $v) {
	if(isset(${$k})) unset(${$k});
	if(in_array($k, array('contactName','contactEmail','contactPhone','contactSubject','contactMessage')))
	${$k} = @get_magic_quotes_gpc() ? $v : @addslashes($v);
}
//Preparamos el mensaje de contacto
$cabeceras = "From: $contactEmail\n" //La persona que envia el correo
 ."Reply-To: $contactEmail\n";

$asunto = "$contactSubject"; //El asunto
$email_to = "info@grupoxifer.com.mx"; //cambiar por tu email
$tele = "$contactPhone";
$contenido = "$contactName le ha enviado el siguiente mensaje:\n"
. "\n"
. "Nombre:$contactName \n"
. "Email:$contactEmail \n" 
. "Telefono:$contactPhone \n"
. "Asunto:$contactSubject \n"
. "Mensaje: $contactMessage \n"
. "\n";
//Enviamos el mensaje y comprobamos el resultado
if(@mail($email_to, $asunto, $tele ,$contenido ,$cabeceras )) {
//Si el mensaje se envia muestra una confirmacion
//die("Muchas gracias, su mensaje fue enviado correctamente... www.grupoxifer.com.mx/index.html");

header ("Location: http://grupoxifer.com.mx/gracias.html");
}else{
//Si el mensaje no se envia muestra el mensaje de error
header ("Location: http://grupoxifer.com.mx/error.html");
}
?>