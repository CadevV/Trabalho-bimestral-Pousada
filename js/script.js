const btnMenu = document.querySelector('.btnMenu')
const btnReserva = document.querySelector('.btnReserva')
const btnMenuFechar = document.querySelector('.btnMenuFechar')
const navMenu = document.querySelector('.navMenu')
const btnRedeSocial = document.querySelectorAll('.btnRedeSocial')
const faqPerguntas = document.querySelectorAll('.faqPergunta')
const faqResposta = document.querySelectorAll('.faqResposta')
const faqIcone = document.querySelectorAll('.faqIcone')
const carroselDesta = document.querySelector('.destaquesCarrossel')
const btnLeftCard = document.querySelector('.btnDestaqueAnterior')
const btnRightCard = document.querySelector('.btnDestaqueProximo')
const navMain = document.querySelector('.navMain')
const limitePixels = 600;

const totalCards = document.querySelectorAll('.destaqueItem').length

function calcularIndiceMaximo() {
    const larguraContainer = document.querySelector('.destaquesContainer').offsetWidth
    const cartoesVisiveis = Math.round(larguraContainer / 370)
    return totalCards - cartoesVisiveis
}

let indiceCarrosel = 0

btnRedeSocial.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = element.dataset.url
    })
})

btnReserva.addEventListener('click', ()=>{
    window.location.href = 'acomodacoes.html'
})

btnMenu.addEventListener('click', ()=>{
    navMenu.classList.add('isActive')
})

btnMenuFechar.addEventListener('click', ()=>{
    navMenu.classList.remove('isActive')
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

faqPerguntas.forEach((question, index) => {
    question.addEventListener('click', () =>{
        faqResposta[index].classList.toggle('isActive')

        faqIcone[index].classList.toggle('isActive')
    })
});

window.addEventListener('scroll', ()=>{
    if (window.scrollY > limitePixels){
        navMain.classList.add('navScrolled')
    }else{
        navMain.classList.remove('navScrolled')
    }
})
