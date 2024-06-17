const btnMenu = document.getElementById('btnMenu');
const menuMobile = document.getElementById('menuMobile');
menuMobile.style.display = 'none';

function clickMenu(){  
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'flex';
    }else{
        menuMobile.style.display = 'none';
    }
}

btnMenu.addEventListener('click', clickMenu);