const btnMenu = document.querySelector('.btnMenu')
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')
const questionsFaq = document.querySelectorAll('.questions')
const respostaFaq = document.querySelectorAll('.respostaFaq')
const iconeFaq = document.querySelectorAll('.iconeFaq')
const carroselDesta = document.querySelector('.carroselDestaque')
const btnLeftCard = document.querySelector('.btnPrevDestaque')
const btnRightCard = document.querySelector('.btnNextDestaque')
const navInterno = document.querySelector('.navInterno')
const limitePixels = 400;

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

questionsFaq.forEach((question, index) => {
    question.addEventListener('click', () =>{
        respostaFaq[index].classList.toggle('activo')

        iconeFaq[index].classList.toggle('activo')
    })
});

window.addEventListener('scroll', ()=>{
    if (window.scrollY > limitePixels){
        navInterno.classList.add('mudancaCor')
    }else{
        navInterno.classList.remove('mudancaCor')
    }
})