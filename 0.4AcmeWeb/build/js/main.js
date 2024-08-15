const initApp = () =>{
    const hamburger = document.getElementById('hamburger-button');
    const mobileBtn =  document.getElementById('mobile-menu');
     const toggleMenu = () =>{
        mobileBtn.classList.toggle('hidden');
        mobileBtn.classList.toggle('flex');
     }
     hamburger.addEventListener('click', toggleMenu);
     mobileBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp); // DOMContentLoaded -- Tells that the html element has loaded