// Movies API

// Vezmeme z HTML
const select = document.getElementById('selectMovies');
const gallery = document.getElementById('gallery');

const defaultOption = select.querySelector('option[value=""]'); // Položka vyber si 

// Událost s pomocí async
select.addEventListener('change', async (e) => {
  const selectedMovie = e.target.value;
  if (defaultOption) { // Pokud se změní pole, vymaže se vyber si
    defaultOption.remove();
  }

  // Pokud klikneme na girl nebo boy
  if(selectedMovie) {
try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${selectedMovie}`)
      const data = await response.json();

      gallery.innerHTML = ''; 
      
      // Vezmeme pole na kousky
      data.forEach(item => {
      
        const show = item.show;
        if (show.image && show.image.medium) { 
          const img = document.createElement('img');
          img.src = show.image.medium; // zdroj obrázku
          img.alt = show.name; // Alternativa - jméno
          gallery.appendChild(img)
        }
      });
    } catch (e) { // Pokud se najde chyba
      throw new Error(`Našla se tu chyba : ${e}`);
      }
  }
});
