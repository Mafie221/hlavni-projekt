// Arrow Funkce

// Vezmeme z HTML
    const arrow = document.querySelector('.arrow');
    
// Funkce   
    const handleScroll = () => {
        const isVisible = window.scrollY >= 200; // Pokud scrollY bude vyšší než 200, šipka bude vidět
        arrow.classList.toggle('arrowSee', isVisible) // Vídět
        arrow.classList.toggle('arrowNone', !isVisible) // Nevidět
    }
    
// Událost    
    window.addEventListener('scroll', handleScroll);