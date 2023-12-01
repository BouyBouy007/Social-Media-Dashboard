const themeButton = document.querySelector('.button-slider');

themeButton.addEventListener('click', () => {
    let bodyBackground = document.body;
    let cardBackground = document.querySelectorAll('.lightmode-container');
    let darkenText = document.querySelectorAll('.switch-text-color');

    bodyBackground.classList.toggle('lightmode-background');
    
    cardBackground.forEach(card => {
      card.classList.toggle('lightmode-card');
    });

    darkenText.forEach(text => {
      text.classList.toggle('lightmode-text');
    })
});