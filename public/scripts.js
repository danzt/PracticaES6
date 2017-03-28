var registrar_usuario = () => {
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password_confirmacion = document.getElementById('password_confirmacion').value;

    if (usuario == "") {
        var mensaje = document.getElementById('mensaje_error');
        mensaje.innerHTML = `<div class="ui negative message">
		                        <div class="header">
		                            ERROR!
		                        </div>
	        	                <p>El campo usuario esta vacio</p>
	    	                </div>`;
    } else if (email == "") {
        alert('Ingrese su email');
    } else if (password == "") {
        alert('Ingrese su contraseña');
    } else if (password_confirmacion == "") {
        alert('Confirma la contraseña');
    } else if (password != password_confirmacion) {
        alert('Las contraseñas no coinciden');
        password = document.getElementById('password').value = "";
        password_confirmacion = document.getElementById('password_confirmacion').value = "";
    }

}