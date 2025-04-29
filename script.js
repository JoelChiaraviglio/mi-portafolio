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
        event.preventDefault(); // Evita la redirección predeterminada de Formsubmit

        fetch(this.action, {
            method: this.method,
            body: new FormData(this)
        })
        .then(response => {
            if (response.ok) {
                mensajeEnviado.style.display = 'block'; // Muestra el mensaje de éxito
                form.reset(); // Limpia el formulario
                setTimeout(() => {
                    mensajeEnviado.style.display = 'none'; // Oculta el mensaje después de unos segundos
                }, 3000); // 3 segundos
            } else {
                mensajeError.style.display = 'block'; // Muestra el mensaje de error
                setTimeout(() => {
                    mensajeError.style.display = 'none'; // Oculta el mensaje después de unos segundos
                }, 5000); // 5 segundos
            }
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            mensajeError.style.display = 'block';
            setTimeout(() => {
                mensajeError.style.display = 'none';
            }, 5000);
        });
    });
});

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
