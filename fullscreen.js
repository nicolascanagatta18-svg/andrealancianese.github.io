// Fullscreen image viewer
document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Check if click is on the image, not the description
            if (e.target.tagName === 'IMG') {
                const img = e.target;
                const fullscreenDiv = document.createElement('div');
                fullscreenDiv.className = 'fullscreen-overlay';
                fullscreenDiv.innerHTML = `
                    <div class="fullscreen-content">
                        <img src="${img.src}" alt="${img.alt}">
                        <button class="fullscreen-close">&times;</button>
                    </div>
                `;
                
                document.body.appendChild(fullscreenDiv);
                
                // Close on button click
                fullscreenDiv.querySelector('.fullscreen-close').addEventListener('click', function() {
                    document.body.removeChild(fullscreenDiv);
                });
                
                // Close on background click
                fullscreenDiv.addEventListener('click', function(e) {
                    if (e.target === fullscreenDiv) {
                        document.body.removeChild(fullscreenDiv);
                    }
                });
                
                // Close on ESC key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        const overlay = document.querySelector('.fullscreen-overlay');
                        if (overlay) {
                            document.body.removeChild(overlay);
                        }
                    }
                });
            }
        });
        
        // Add cursor pointer to images
        const img = item.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
        }
    });
});
