const btnMenu = document.querySelector('.btnMenu')
const btnMenuFechar = document.querySelector('.btnMenuFechar')
const navMenu = document.querySelector('.navMenu')
const btnRedeSocial = document.querySelectorAll('.btnRedeSocial')

btnMenu.addEventListener('click', ()=>{
    navMenu.classList.add('isActive')
})

btnMenuFechar.addEventListener('click', ()=>{
    navMenu.classList.remove('isActive')
})

btnRedeSocial.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = element.dataset.url
    })
})