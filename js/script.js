const btnMenu = document.querySelector('.btnMenu')
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')

btnMenu.addEventListener('click', ()=>{
    contMenu.classList.remove('hidden')
})

btnMenuClose.addEventListener('click', ()=>{
    contMenu.classList.add('hidden')
})