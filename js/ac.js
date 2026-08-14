const btnOpenModal = document.querySelectorAll('.btnInfo')
const btnCloseModal = document.querySelector('.btnCloseModal')
const modalAc = document.querySelector('.modalQuarto')
const numTotal = document.querySelector('.numTotal')
const numCasal = document.querySelector('.numCasal')
const numFamilia = document.querySelector('.numFamilia')
const quartosFamilia = document.querySelectorAll('.familia')
const quartosCasal = document.querySelectorAll('.casal')
const btnTotal = document.getElementById('btnTotal')
const btnCasal = document.getElementById('btnCasal')
const btnFamilia = document.getElementById('btnFamilia')

function atualizarQuartos(){
    numTotal.textContent = quartosFamilia.length + quartosCasal.length
    numCasal.textContent = quartosCasal.length
    numFamilia.textContent = quartosFamilia.length
}

btnTotal.addEventListener('click', ()=>{
    btnCasal.classList.remove('active')
    btnFamilia.classList.remove('active')
    btnTotal.classList.add('active')

    quartosFamilia.forEach(element => {
        element.classList.remove('off')
    });

    quartosCasal.forEach(element => {
        element.classList.remove('off')
    });
})

btnCasal.addEventListener('click', ()=>{
    btnCasal.classList.add('active')
    btnFamilia.classList.remove('active')
    btnTotal.classList.remove('active')

    quartosFamilia.forEach(element => {
        element.classList.add('off')
    });

    quartosCasal.forEach(element => {
        element.classList.remove('off')
    });
})

btnFamilia.addEventListener('click', ()=>{
    btnCasal.classList.remove('active')
    btnFamilia.classList.add('active')
    btnTotal.classList.remove('active')

    quartosFamilia.forEach(element => {
        element.classList.remove('off')
    });

    quartosCasal.forEach(element => {
        element.classList.add('off')
    });
})

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

atualizarQuartos()