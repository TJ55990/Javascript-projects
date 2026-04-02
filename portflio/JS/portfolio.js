// SELECT ELEMENTS
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// OPEN LIGHTBOX
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

// CLOSE LIGHTBOX WHEN CLICKING BACKGROUND
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// CLOSE WITH ESC KEY
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});