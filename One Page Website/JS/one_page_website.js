function openModal(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}

// Close when pressing ESC key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});