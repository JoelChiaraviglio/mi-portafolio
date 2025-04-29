<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "chiaravigliobrianjoel@gmail.com"; // Reemplaza con tu dirección de correo
    $asunto = "Mensaje del formulario de contacto";
    $cuerpo = "Nombre: " . $nombre . "\n";
    $cuerpo .= "Teléfono: " . $telefono . "\n";
    $cuerpo .= "Email: " . $email . "\n";
    $cuerpo .= "Tema: " . $tema . "\n";
    $cuerpo .= "Mensaje:\n" . $mensaje . "\n";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "¡Mensaje enviado correctamente!"; // Puedes redirigir a una página de éxito
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."; // Puedes redirigir a una página de error
    }
} else {
    // Si se accede al script directamente sin enviar el formulario
    echo "Acceso no permitido.";
}
?>