// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que se active el evento del overlay
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que se active el evento del overlay
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

// Función única para apagar la vela e iniciar todo
function encenderSorpresa() {
  // Reproducir soplido
  soplido.currentTime = 0;
  soplido.play().catch(e => console.log("Audio bloqueado temporalmente"));

  // Apagar la llama de la vela
  if (llama) {
    llama.style.animation = "apagar 0.5s forwards";
  }

  // Quitar la pantalla negra y poner la canción
  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play().catch(e => console.log("Audio bloqueado"));
    overlay.classList.add("hidden");
  }, 1000);
}

// Ahora funciona tanto si toca la llama como si toca la pantalla negra del inicio
if (llama) {
  llama.addEventListener("click", encenderSorpresa);
}

if (overlay) {
  overlay.addEventListener("click", encenderSorpresa);
}
