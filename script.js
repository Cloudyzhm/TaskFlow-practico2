var comentarios = [
    {
      autor: "Camila Rojas",
      imagenPerfil: "https://randomuser.me/api/portraits/women/44.jpg",
      contenido: "Me parece bien la idea, pero hay que revisar los tiempos.",
      fechaHora: "21 abr, 10:32",
      respuestas: [
        {
          autor: "Jorge Pérez",
          imagenPerfil: "https://randomuser.me/api/portraits/men/55.jpg",
          contenido: "Sí, yo también creo que deberíamos ajustarlos.",
          fechaHora: "21 abr, 11:02"
        },
        {
          autor: "Natalia Fuentes",
          imagenPerfil: "https://randomuser.me/api/portraits/women/21.jpg",
          contenido: "Yo propongo sumar una reunión para ajustar fechas.",
          fechaHora: "21 abr, 11:15"
        }
      ]
    },

    {
      autor: "Andrea Soto",
      imagenPerfil: "https://randomuser.me/api/portraits/women/66.jpg",
      contenido: "Recuerden actualizar la descripción de la tarea cuando terminen.",
      fechaHora: "21 abr, 08:45",
      respuestas: [
        {
          autor: "Carlos Díaz",
          imagenPerfil: "https://randomuser.me/api/portraits/men/88.jpg",
          contenido: "Gracias por recordarlo, lo haré hoy.",
          fechaHora: "21 abr, 09:10"
        }
      ]
    },
    {
      autor: "Matías Herrera",
      imagenPerfil: "https://randomuser.me/api/portraits/men/22.jpg",
      contenido: "Yo aún no tengo acceso al repositorio, ¿alguien puede revisar?",
      fechaHora: "20 abr, 17:42",
      respuestas: [
        {
          autor: "Fernanda Aguilar",
          imagenPerfil: "https://randomuser.me/api/portraits/women/50.jpg",
          contenido: "Ya pedí al admin que te lo habilite.",
          fechaHora: "20 abr, 18:03"
        }
      ]
    },
    {
      autor: "Tomás Vidal",
      imagenPerfil: "https://randomuser.me/api/portraits/men/61.jpg",
      contenido: "¿Podemos revisar los criterios de aceptación antes del viernes?",
      fechaHora: "20 abr, 13:27",
      respuestas: [
        {
          autor: "Ignacia Reyes",
          imagenPerfil: "https://randomuser.me/api/portraits/women/18.jpg",
          contenido: "Sí, tengo una propuesta lista.",
          fechaHora: "20 abr, 14:00"
        }
      ]
    },

];

let contenedor = document.getElementById("comentarios-container");

comentarios.forEach(comentario => {
  let html = `
    <div class="comentario">
      <img src="${comentario.imagenPerfil}">
      <div>
        <div class="contenido">
          <div class="cabecera">
            <strong>${comentario.autor}</strong>
            <span class="fecha">${comentario.fechaHora}</span>
          </div>
          ${comentario.contenido}
        </div>
  `;
  comentario.respuestas.forEach(respuesta => {
    html += `
      <div class="respuesta">
        <div class="comentario">
          <img src="${respuesta.imagenPerfil}">
          <div>
            <div class="contenido">
              <div class="cabecera">
                <strong>${respuesta.autor}</strong>
                <span class="fecha">${respuesta.fechaHora}</span>
              </div>
              ${respuesta.contenido}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  contenedor.innerHTML += html;
});