fetch('https://randomuser.me/api/')
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (myJson) {
    randomUser = myJson.results[0];

    const persona = {
      nombre: randomUser.name.first,
      apellido: randomUser.name.last,
      foto: randomUser.picture.large,
      mail: randomUser.email,
      telefono: randomUser.phone,
      lugar: randomUser.location.city,
      pais: randomUser.location.country,
    };
    crearTarjeta(persona);
  });

function crearTarjeta(persona) {
  let body = document.getElementById('main');
  body.innerHTML = `
            <section class="tarjeta">
              <img src="${persona.foto}" alt="">
              <h1>Hola soy <span>${persona.nombre} ${persona.apellido}</span></h1>
              <hr>
              <a href="${persona.foto}">${persona.mail}</a>
              <h4>Localidad: ${persona.lugar}, ${persona.pais}</h4>
              <h4>Teléfono: ${persona.telefono}</h4>
            </section>
              `;
}
