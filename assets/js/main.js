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
})