const btnMenu = document.querySelector('.btnMenu')
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')
const carroselDesta = document.querySelector('.carroselDestaque')
const btnLeftCard = document.querySelector('.btnPrevDestaque')
const btnRightCard = document.querySelector('.btnNextDestaque')

let indiceCarrosel = 0

btnMenu.addEventListener('click', ()=>{
    contMenu.classList.add('active')
})

btnMenuClose.addEventListener('click', ()=>{
    contMenu.classList.remove('active')
})

btnRightCard.addEventListener('click', () => {

    if(indiceCarrosel < 2){
        indiceCarrosel++
    } else {
        indiceCarrosel = 0
    }

    carroselDesta.style.transform =
            `translateX(${-indiceCarrosel * 370}px)`

})

btnLeftCard.addEventListener('click', () => {

    if(indiceCarrosel > 0){
        indiceCarrosel--
    } else {
        indiceCarrosel = 2
    }

    carroselDesta.style.transform =
            `translateX(${-indiceCarrosel * 370}px)`

})