document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    var mail = document.getElementById('mail').value;
    if(mail.length == 0) {
      alert('No has escrito nada en el mail');
      return;
    }
    this.submit();
    alert('¡Gracias por comunicarte con nosotros!');
  }
