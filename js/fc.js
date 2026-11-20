const btnMenu = document.querySelector('.btnMenu')
const btnMenuFechar = document.querySelector('.btnMenuFechar')
const navMenu = document.querySelector('.navMenu')
const btnRedeSocial = document.querySelectorAll('.btnRedeSocial')
const inputNome = document.getElementById("nomeContato")
const sobrenomeContato = document.getElementById("sobrenomeContato")
const emailContato = document.getElementById("emailContato")
const telefoneContato = document.getElementById("telefoneContato")
const dataNascimentoContato = document.getElementById("dataNascimentoContato")
const cpfContato = document.getElementById("cpfContato")
const comentario = document.getElementById("comentario")
const btnEnviarContato = document.getElementById("btnEnviarContato")
const feedbackContato = document.querySelector(".feedbackContato")
const btnHistorico = document.querySelector('.btnHistorico')
const modalHistorico = document.querySelector(".modalHistorico")
const contModal = document.querySelector(".contModal")
const btnSair = document.querySelector(".bntSairM")

const envios = []

function logicaModal(){
    modalHistorico.classList.toggle('active')
}

function respostaForm(){
    const valorNome = inputNome.value 
    const valorSobrenome = sobrenomeContato.value
    const valorEmail = emailContato.value
    const valorTel = telefoneContato.value
    const valorDataNas = dataNascimentoContato.value
    const valorCpf = cpfContato.value

    const valorMensagem = comentario.value

    if(!valorEmail.includes("@")){
        return
    }

    feedbackContato.innerHTML = 
    `

    <h2> Nome Completo: ${valorNome} ${valorSobrenome} </h2>
    
    <h2> Email : ${valorEmail} </h2>

    <h2> Telefone : ${valorTel} </h2>

    <h2> Data Nascimento : ${valorDataNas} </h2>

    <h2> CPF : ${valorCpf} </h2>

    <br />
    <h2> Mensagem : <br /> <h3>${valorMensagem}</h3></h2>
    `

    const newResenha = {
        nome: valorNome,
        sobrenome: valorSobrenome,
        email: valorEmail,
        telefone: valorTel,
        dataNas: valorDataNas,
        cpf: valorCpf,
        mensagem: valorMensagem,
    }

    envios.push(newResenha)
    
    inputNome.value = ""
    sobrenomeContato.value = ""
    emailContato.value = ""
    telefoneContato.value = ""
    dataNascimentoContato.value = ""
    cpfContato.value = ""
    comentario.value = ""
}

function historico(){
    envios.forEach(el =>{
        const novo = document.createElement("div")
        novo.classList.add("pergunta")
        
        novo.innerHTML = 
        `
            <h2>Nome: ${el.nome} ${el.sobrenome}</h2>
            <h2>Email: ${el.email}</h2>
            <h2>CPF: ${el.cpf}</h2>
            <h2>TEL: ${el.telefone}</h2>
            <h2>Data nascimento: ${el.dataNas}</h2>
            <h2>Comentario: <h2>${el.mensagem}</h2></h2>
        `

        contModal.appendChild(novo)
    })
}

btnEnviarContato.addEventListener("click", () =>{
    respostaForm()
})

btnHistorico.addEventListener('click', ()=>{
    logicaModal()
    historico()
})

btnSair.addEventListener('click', logicaModal)

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
