document.addEventListener("DOMContentLoaded", function () {
  const registroForm = document.getElementById("registro-form");

  registroForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;

      // Crea Objeto con datos del formulario
      const formData = {
          nombre: nombre,
          apellido: apellido,
          fechaNacimiento: fechaNacimiento
      };

      //Solicitud fetch con POST
      fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Respuesta del servidor:', data);
          alert('Datos cargados correctamente ' + data.id);
          
      })
      .catch(error => {
          console.error('Error al enviar el formulario:', error);
          alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      });
  });
});