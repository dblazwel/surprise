document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-item');
    const initialMessage = document.getElementById('initialMessage');
    const messageContainer = document.getElementById('messageContainer');
    let imagesRemoved = 0;

    images.forEach((image) => {
        image.addEventListener('click', function() {
            if (!image.classList.contains('hidden')) {
                image.classList.add('hidden');
                imagesRemoved++;

                if (imagesRemoved === images.length) {
                    setTimeout(() => {
                        initialMessage.classList.add('hidden'); // Oculta el mensaje inicial
                        messageContainer.classList.remove('hidden');
                    }, 600);
                }
            }
        });
    });
});

