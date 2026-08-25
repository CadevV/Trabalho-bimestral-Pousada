const btnMenu = document.querySelector('.btnMenu')
const btnReserva = document.querySelector('.btnReserva')
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')
const btnRedes = document.querySelectorAll('.btnRedes')
const questionsFaq = document.querySelectorAll('.questions')
const respostaFaq = document.querySelectorAll('.respostaFaq')
const iconeFaq = document.querySelectorAll('.iconeFaq')
const carroselDesta = document.querySelector('.carroselDestaque')
const btnLeftCard = document.querySelector('.btnPrevDestaque')
const btnRightCard = document.querySelector('.btnNextDestaque')
const navInterno = document.querySelector('.navInterno')
const limitePixels = 600;

const totalCards = document.querySelectorAll('.boxDestaque').length

function calcularIndiceMaximo() {
    const larguraContainer = document.querySelector('.containerDestaque').offsetWidth
    const cartoesVisiveis = Math.round(larguraContainer / 370)
    return totalCards - cartoesVisiveis
}

let indiceCarrosel = 0

btnRedes.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = element.dataset.url
    })
})

btnReserva.addEventListener('click', ()=>{
    window.location.href = 'acomodacoes.html'
})

btnMenu.addEventListener('click', ()=>{
    contMenu.classList.add('active')
})

btnMenuClose.addEventListener('click', ()=>{
    contMenu.classList.remove('active')
})

btnRightCard.addEventListener('click', () => {

    if(indiceCarrosel < calcularIndiceMaximo()){
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
        indiceCarrosel = calcularIndiceMaximo()
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