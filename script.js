let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('miFormulario');
    const mensajeEnviado = document.getElementById('mensaje-enviado');
    const mensajeError = document.getElementById('mensaje-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_5i0dh68'; // Tu Service ID
        const templateID_para_ti = 'contacto_admin'; // <--- Usa el ID de la plantilla PARA TI
        const templateID_respuesta = 'template_xmsgd2q'; // <--- Usa el ID de la plantilla de respuesta automática

        const params = {
            nombre: this.querySelector('[name="nombre"]').value,
            telefono: this.querySelector('[name="telefono"]').value,
            email: this.querySelector('[name="email"]').value,
            mensaje: this.querySelector('[name="mensaje"]').value
        };

        // Enviar correo a ti
        emailjs.send(serviceID, templateID_para_ti, params)
            .then(function(response) {
                // Enviar respuesta automática al usuario
                return emailjs.send(serviceID, templateID_respuesta, params); // Usa la misma data del formulario
            })
            .then(function(responseAuto) {
                console.log('SUCCESS (respuesta)!', responseAuto.status, responseAuto.text);
                mensajeEnviado.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    mensajeEnviado.style.display = 'none';
                }, 3000);
                mensajeError.style.display = 'none';
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                mensajeError.style.display = 'block';
                setTimeout(() => {
                    mensajeError.style.display = 'none';
                }, 5000);
                mensajeEnviado.style.display = 'none';
            });
    });
});


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
