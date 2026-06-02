document.addEventListener("DOMContentLoaded", function() {
    
    // Initialize 3D Viewer
    pannellum.viewer('panorama-viewer', {
        "type": "equirectangular",
        "panorama": "assets/mainpic.jpg",
        "autoLoad": true,
        "compass": false
    });

    // Initialize Animate On Scroll (AOS)
    AOS.init({
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 50, // Offset (in px) from the original trigger point
    });
});