document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialize 3D Viewer (Updated to your mainpic.jpg)
    pannellum.viewer('panorama-viewer', {
        "type": "equirectangular",
        "panorama": "assets/mainpic.jpg", 
        "autoLoad": true,
        "compass": false
    });

    // 2. Initialize Animate On Scroll (AOS)
    AOS.init({
        once: true, 
        offset: 50,
    });

    // 3. Initialize Swiper for Product Cards
    const swipers = document.querySelectorAll('.product-swiper');
    swipers.forEach(function(slider) {
        new Swiper(slider, {
            loop: true,          
            grabCursor: true,    
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true, 
            },
        });
    });

    // 4. Full-Screen Image Lightbox Logic
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-modal");
    const productImages = document.querySelectorAll(".swiper-slide img");

    // Open modal when any product image is clicked
    productImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            // Small delay allows the CSS transition to look smooth
            setTimeout(() => modal.classList.add("show"), 10);
            modalImg.src = this.src; // Copies the clicked image into the popup
        });
    });

    // Function to close the modal
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300); // Waits for fade-out animation
    }

    // Close modal when clicking the 'X' button
    closeBtn.addEventListener("click", closeModal);

    // Close modal when clicking anywhere in the dark background
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
});