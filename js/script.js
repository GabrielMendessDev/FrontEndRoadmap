const btnMenu = document.getElementById('btnMenu');
const menuMobile = document.getElementById('menuMobile');
menuMobile.style.display = 'none';

function clickMenu(){  
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'flex';
    }else if(menuMobile.style.display == 'flex'){
        menuMobile.style.animation = 'slideRight 0.6s forwards'
    }else{
        menuMobile.style.display = 'none';
    }
}

btnMenu.addEventListener('click', clickMenu);