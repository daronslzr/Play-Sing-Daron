document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('botonIrArriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  /* REPRODUCTOR DE CANCIONES */
  //Selecciona los botones play del div container cancion
  const playCanciones = document.querySelectorAll('.cancion .fa-play');

  const reproductor = document.querySelector('.reproductor-container');
  const imagenReproductor = document.querySelector('.imagenReproductor');
  const cancionReproductor = document.querySelector('.nombreReproductor');
  const artistaReproductor = document.querySelector('.artistaReproductor');
  const cerrarReproductor = document.querySelector('#cerrar');

  const pausarReproductor = document.querySelector('.fa-pause');
  const reproducirReproductor = document.querySelector('.pausa .fa-play');
  //Const cancion
  //Const artista

  playCanciones.forEach(cancion => {

    cancion.addEventListener('click', () => {
      let tituloCancion;
      let tituloArtista;
      //Utilizado para obtener la imagen de la cancion y pasarsela al reproductor
      reproductor.style.display = 'flex';
      imagenReproductor.src = cancion.parentElement.querySelector('img').src;

      //Utilizado para obtener el nombre de la cancion y pasarsela al reproductor
      tituloCancion = cancion.parentElement.querySelector('.informacion-cancion .nombreCancion').textContent;
      cancionReproductor.textContent = tituloCancion;

      //Utilizado para obtener el nombre del artista y pasarsela al reproductor
      tituloArtista = cancion.parentElement.querySelector('.informacion-cancion .artistaCancion').textContent;
      artistaReproductor.textContent = tituloArtista;

    });
  });

  cerrarReproductor.addEventListener('click', () => {
    reproductor.style.display = 'none';
  });

  pausarReproductor.addEventListener('click', () => {
    pausarReproductor.style.display = 'none';
    reproducirReproductor.style.display = 'flex';
  });

  reproducirReproductor.addEventListener('click', () => {
    reproducirReproductor.style.display = 'none';
    pausarReproductor.style.display = 'flex';
  });

  const botonBoletos = document.querySelectorAll('.botonBoletos')

  botonBoletos.forEach(boton => {
    boton.addEventListener('click', () => {
    alert('El sitio de venta de boletos está bajo mantenimiento, por favor intentelo más tarde.');
    });
  });

});