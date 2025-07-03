const nav = document.querySelector('nav');
const menu = document.querySelector('span');

menu.addEventListener('click', () => {
    // classlist.add adiciona ou remove uma classe a um elemento 
    nav.classList.toggle('showNav');
    
})



