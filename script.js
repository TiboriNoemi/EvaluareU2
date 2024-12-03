document.getElementById('monitorizare-resurse').addEventListener('dblclick', function () {
    const images = document.querySelectorAll('#slideshow-container img');
    let currentIndex = 0;
    let intervalId = null; 

    // Funcție pentru afișarea unei imagini active
    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove('active'); 
            if (i === index) img.classList.add('active'); 
        });
    }

    // Slideshow-ul începe la dublu-clic
    if (!intervalId) {
        showSlide(currentIndex); // Afișăm prima imagine
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            showSlide(currentIndex);
        }, 3000); // Schimbare la fiecare 3 secunde
    }
});
