// JavaScript to open modal and display selected image
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// JavaScript to close the modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
