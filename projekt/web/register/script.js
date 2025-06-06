// Porovnání hesel

// Vezmeme z HTML
const password = document.getElementById('register-password');
const confirmedPass = document.getElementById('confirm-password');

// Kontrola hesla
const checkPassword = () => {
    const match = password.value === confirmedPass.value && password.value !== ''; // Porovnání hesel
  
    
    [password, confirmedPass].forEach(field => {
      field.classList.remove('outline-ok', 'outline-wrong'); // pokud dáme pryč potvrzení, smaže se barva
    });
  
    if (confirmedPass.value !== '') {  // Pokud hesla souvísí, zelená.. pokud ne, červená
      [password, confirmedPass].forEach(field => {
        field.classList.add(match ? 'outline-ok' : 'outline-wrong');
      });
    }
  };
  
  // Události
  password.addEventListener('input', checkPassword);
  confirmedPass.addEventListener('input', checkPassword);
