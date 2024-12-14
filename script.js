function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('open');
  }

  document.addEventListener("DOMContentLoaded", () => {
    const dropdownTitles = document.querySelectorAll(".dropdown-title");
  
    dropdownTitles.forEach((title) => {
      title.addEventListener("click", () => {
        const targetId = title.getAttribute("data-target");
        const dropdown = document.getElementById(targetId);
        dropdown.classList.toggle("open");
      });
    });
  });
  

  function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }
  




  // Get references to elements
const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeModalButton = document.getElementById('closeModalButton');

// Open the modal when the "Contact" button is clicked
contactButton.addEventListener('click', () => {
  contactModal.classList.add('open');
});

// Close the modal when the "Close" button is clicked
closeModalButton.addEventListener('click', () => {
  contactModal.classList.remove('open');
});

// Close the modal when clicking outside the modal content
contactModal.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    contactModal.classList.remove('open');
  }
});
