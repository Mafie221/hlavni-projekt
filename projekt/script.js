


//  Arrow událost

if(window.location.pathname === '/index.html') {
  
const arrow = document.querySelector('.arrow');

const handleScroll = () => {
    const isVisible = window.scrollY >= 200;
    arrow.classList.toggle('arrowSee', isVisible)
    arrow.classList.toggle('arrowNone', !isVisible)
}

window.addEventListener('scroll', handleScroll);

}
  // Registrace

if (window.location.pathname === '/register.html') {


const password = document.getElementById('register-password');
const confirmedPass = document.getElementById('confirm-password');


const checkPassword = () => {
    const match = password.value === confirmedPass.value && password.value !== '';
  
    
    [password, confirmedPass].forEach(field => {
      field.classList.remove('outline-ok', 'outline-wrong');
    });
  
    if (confirmedPass.value !== '') {
      [password, confirmedPass].forEach(field => {
        field.classList.add(match ? 'outline-ok' : 'outline-wrong');
      });
    }
  };
  
  password.addEventListener('input', checkPassword);
  confirmedPass.addEventListener('input', checkPassword);
}

 // Movies select API
if (window.location.pathname === '/movies.html') {
 

  const select = document.getElementById('selectMovies');
  const gallery = document.getElementById('gallery');

  select.addEventListener('change', async (e) => {
    const selectedMovie = e.target.value;
  
    
    if(selectedMovie) {

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${selectedMovie}`)
        const data = await response.json();

        gallery.innerHTML = ''; 
        
        data.forEach(item => {
        
          const show = item.show;
          if (show.image && show.image.medium) { 
            const img = document.createElement('img');
            img.src = show.image.medium;
            img.alt = show.name;
            img.style.margin = '10px';
            img.style.width = '150px'; 
            gallery.appendChild(img)
          }
        });
    }
  });
}