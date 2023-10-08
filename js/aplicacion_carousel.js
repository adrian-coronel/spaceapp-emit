const carouselContainer = document.querySelector(".carousel-container");
const carouselTrack = document.querySelector(".carousel-track");
const carouselItems = document.querySelectorAll(".carousel-item");
const arrows = document.querySelectorAll(".arrow");

let currentIndex = Math.floor(carouselItems.length / 2); // Comienza en el medio
let prevIndex = currentIndex; // Almacenar el índice anterior

carouselItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === currentIndex) {
      // Solo alterna entre el texto del div front y back en el div central
      const frontText = item.querySelector(".front p");
      const backText = item.querySelector(".back p");

      if (frontText.style.display === "none") {
        frontText.style.display = "block";
        backText.style.display = "none";
      } else {
        frontText.style.display = "none";
        backText.style.display = "block";
      }
    }
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    prevIndex = currentIndex; // Almacenar el índice anterior antes de cambiarlo

    if (e.target.classList.contains("left")) {
      // Desplazar hacia la izquierda
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    } else if (e.target.classList.contains("right")) {
      // Desplazar hacia la derecha
      currentIndex = (currentIndex + 1) % carouselItems.length;
    }

    const translateX = -currentIndex * (carouselItems[0].offsetWidth + 40) + carouselContainer.offsetWidth / 2 - carouselItems[0].offsetWidth / 2;
    carouselTrack.style.transform = `translateX(${translateX}px)`;

    // Establecer el div central sin cambiar el texto
    carouselItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
        // Restaurar el texto del div front cuando deja de ser central
        item.querySelector(".front p").style.display = "block";
        item.querySelector(".back p").style.display = "none";
      }
    });
  });
});

// Inicializar el div central y el texto del div front
carouselItems[currentIndex].classList.add("active");
