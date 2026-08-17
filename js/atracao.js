const btnMenu = document.querySelector('.btnMenu')
const btnReserva = document.querySelector('.btnReserva')
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')
const btnRedes = document.querySelectorAll('.btnRedes')

btnMenu.addEventListener('click', ()=>{
    contMenu.classList.add('active')
})

btnMenuClose.addEventListener('click', ()=>{
    contMenu.classList.remove('active')
})