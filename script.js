// Wait for the HTML to fully load before starting the 3D viewer
document.addEventListener("DOMContentLoaded", function() {
    
    pannellum.viewer('panorama-viewer', {
        "type": "equirectangular",
        
        // This is a sample image. Once you upload your 3D render to the assets folder,
        // change this URL to "assets/your-render-name.jpg"
        "panorama": "assets/mianpic.jpg",
        
        "autoLoad": true,
        "compass": false
    });

});