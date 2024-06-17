const btnMenu = document.getElementById('btnMenu');
const menuMobile = document.getElementById('menuMobile');
menuMobile.style.display = 'none';

function clickMenu(){  
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'flex';
        menuMobile.style.animation = 'slideLeft 0.6s forwards';
    }else{
        menuMobile.style.animation = 'slideRight 0.6s forwards';
        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 600)
    }
}

btnMenu.addEventListener('click', clickMenu);