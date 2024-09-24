// Function to open the modal and display the clicked image
function openModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImage.src = imageElement.src; // Set the modal image to the clicked image's source
    caption.innerHTML = imageElement.alt; // Set the caption to the image's alt text
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
  }
  
