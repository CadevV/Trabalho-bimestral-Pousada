const btnOpenModal = document.querySelectorAll('.btnInfo')
const btnCloseModal = document.querySelector('.btnCloseModal')
const modalAc = document.querySelector('.modalQuarto')

btnOpenModal.forEach(element =>{
    element.addEventListener('click', ()=>{
        modalAc.classList.add('active')
        document.body.classList.add('modalOpen')
    })
})  

btnCloseModal.addEventListener('click', ()=>{
    modalAc.classList.remove('active')
    document.body.classList.remove('modalOpen')
})