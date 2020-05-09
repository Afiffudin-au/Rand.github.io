
const button = document.querySelector('.generate');
const display = document.querySelector('.show-number');
button.addEventListener('click',function () {
  display.style.border = 'px solid lightskyblue';
 let min = document.querySelector('.input-min').value;
 let max = document.querySelector('.input-max').value;
 min =  Math.ceil(min);
 max = Math.floor(max);
 const Random = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
 display.textContent = Random;
});
