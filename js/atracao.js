const btnMenu = document.querySelector('.btnMenu')
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')
const btnRedes = document.querySelectorAll('.btnRedes')
const bntprograma = document.querySelector('.bntprograma')
const respostaBnt = document.querySelector('.respostaBnt')
const textoPrograma = document.querySelector('.programaTexto')

btnMenu.addEventListener('click', ()=>{
    contMenu.classList.add('active')
})

btnMenuClose.addEventListener('click', ()=>{
    contMenu.classList.remove('active')
})

btnRedes.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = element.dataset.url
    })
})

bntprograma.addEventListener('click', () =>{
    textoPrograma.classList.add('active')
})


