document.addEventListener("DOMContentLoaded", function() {
    // 1. Initialize 3D Viewer Engine with Default Photo
    let currentViewer = pannellum.viewer('panorama-viewer', {
        "type": "equirectangular",
        "panorama": "assets/mainpic.jpg", 
        "autoLoad": true,
        "compass": false
    });

    // 1.5 Handle Thumbnail Gallery Clicks
    const panoThumbs = document.querySelectorAll('.pano-thumb');
    
    panoThumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove 'active' gold border from all thumbnails
            panoThumbs.forEach(t => t.classList.remove('active'));
            
            // Add 'active' gold border to the clicked thumbnail
            this.classList.add('active');
            
            // Find the 360 image file path from the clicked thumbnail's data attribute
            const newPano = this.getAttribute('data-pano');
            
            // Safely destroy the old room instance and load the new 360 room
            currentViewer.destroy();
            currentViewer = pannellum.viewer('panorama-viewer', {
                "type": "equirectangular",
                "panorama": newPano, 
                "autoLoad": true,
                "compass": false
            });
        });
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

    // 5. Drag-to-Scroll logic for the Full Catalog Image (for Desktop)
    const panContainer = document.querySelector('.catalog-pan-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (panContainer) {
        panContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            panContainer.style.cursor = 'grabbing';
            startX = e.pageX - panContainer.offsetLeft;
            scrollLeft = panContainer.scrollLeft;
        });
        panContainer.addEventListener('mouseleave', () => {
            isDown = false;
            panContainer.style.cursor = 'grab';
        });
        panContainer.addEventListener('mouseup', () => {
            isDown = false;
            panContainer.style.cursor = 'grab';
        });
        panContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - panContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag speed multiplier
            panContainer.scrollLeft = scrollLeft - walk;
        });
    }
    
});