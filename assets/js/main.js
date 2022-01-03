"use stricts"; 

console.log("hello ! ");

var subEmailHero = document.getElementById('subEmailHero');
var email = document.getElementById('email');

email.addEventListener('click', ()=>{
    console.log("email!");
    subEmailHero.classList.add('cont__subInput--animation');
});

subEmailHero.addEventListener('click', ()=>{
    subEmailHero.classList.remove('cont__subInput--animation');
});


var subEmailHero2 = document.getElementById('subEmailHero2');
var emai2 = document.getElementById('email2');

email2.addEventListener('click', ()=>{
    console.log("email!");
    subEmailHero2.classList.add('cont__subInput--animation');
})

subEmailHero2.addEventListener('click', ()=>{
    subEmailHero2.classList.remove('cont__subInput--animation');
});


//// the button of menu 

var btnMenu = document.querySelector('.head__menu');
var head__menuBar = document.querySelectorAll('.head__menuBar');
var head__nav = document.querySelector('.head__nav');
var nav__lien = document.querySelectorAll('.nav__lien');


btnMenu.addEventListener('click', ()=>{
    
    if(btnMenu.classList.contains('head__menu--click')){
        
        btnMenu.classList.remove('head__menu--click');
        head__nav.classList.remove('head__nav--click');
        head__menuBar.forEach(el =>{
        el.classList.remove('head__menuBar--click');
    });
    }else{
        btnMenu.classList.add('head__menu--click');
        head__nav.classList.add('head__nav--click');
        head__menuBar.forEach(el =>{
            el.classList.add('head__menuBar--click');
        })
    }
    
    
});

nav__lien.forEach(link =>{
    link.addEventListener('click', ()=>{
        btnMenu.classList.remove('head__menu--click');
        head__nav.classList.remove('head__nav--click');
        head__menuBar.forEach(el =>{
        el.classList.remove('head__menuBar--click');
    })
    })
})