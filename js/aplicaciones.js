const openPopupButtons = document.querySelectorAll('.linkpopup');
const closePopupButtons = document.querySelectorAll('.closePopup');
const popups = document.querySelectorAll('.popup');

function abrirPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
  mostrarDiapositiva(popupId, 1);
}

openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetPopupId = button.getAttribute('data-popup');
    abrirPopup(targetPopupId);
  });
});

// Inicializar un objeto para rastrear la diapositiva actual de cada popup
const diapositivaActual = {
  popup1: 1,
  popup2: 1,
  popup3: 1,
  popup4: 1,
  popup5: 1,
  popup6: 1,
  popup7: 1,
  popup8: 1,
  popup9: 1,
}

// Función para mostrar una diapositiva específica
function mostrarDiapositiva(popupId, n) {
  const diapositivas = document.querySelectorAll(`#${popupId} .slide`);
  if (n > diapositivas.length) {
    diapositivaActual[popupId] = 1;
  }
  if (n < 1) {
    diapositivaActual[popupId] = diapositivas.length;
  }
  diapositivas.forEach((diapositiva, index) => {
    if (index === diapositivaActual[popupId] - 1) {
      diapositiva.style.display = "block";
    } else {
      diapositiva.style.display = "none";
    }
  });

  // Deshabilitar el botón "Anterior" en la primera diapositiva
  const botonAnterior = document.querySelector(`#${popupId} .anterior`);
  if (botonAnterior) {
    botonAnterior.style.display = (diapositivas.length > 1 && diapositivaActual[popupId] > 1) ? "block" : "none";
  }

  // Deshabilitar el botón "Siguiente" en la última diapositiva
  const botonSiguiente = document.querySelector(`#${popupId} .siguiente`);
  if (botonSiguiente) {
    botonSiguiente.style.display = (diapositivas.length > 1 && diapositivaActual[popupId] < diapositivas.length) ? "block" : "none";
  }
}

// Función para cambiar la diapositiva
function cambiarDiapositiva(popupId, n) {
  mostrarDiapositiva(popupId, diapositivaActual[popupId] += n);
}

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parentPopup = button.closest('.popup');
    if (parentPopup) {
      const popupId = parentPopup.id;
      cerrarPopup(popupId);
    }
  });
});

function cerrarPopup(popupId) {
  document.getElementById(popupId).style.display = "none";
  diapositivaActual[popupId] = 1; // Reiniciar la diapositiva cuando se cierra la carta
}
