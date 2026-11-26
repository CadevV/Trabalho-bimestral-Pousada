const btnMenu = document.querySelector('.btnMenu')
const btnMenuFechar = document.querySelector('.btnMenuFechar')
const navMenu = document.querySelector('.navMenu')
const btnRedeSocial = document.querySelectorAll('.btnRedeSocial')
const btnEnviarContato = document.querySelector(".btnEnviarContato")
const btnHistorico = document.querySelector(".btnHistorico")
const modalHistorico = document.querySelector(".modalHistorico")
const contModal = document.querySelector(".contModal")
const btnSair = document.querySelector(".bntSairM")
const selectForm = document.getElementById("selectForm")
const formDuvida = document.getElementById("duvida")
const formReserva = document.getElementById("reserva")
const dataHospedagem = document.getElementById("dataHospedagem")
const btnOrcamento = document.getElementById("btnOrcamento")
const resultadoReserva = document.getElementById("resultadoReserva")

const envios = []

function logicaModal(){
    modalHistorico.classList.toggle('active')
}

function respostaForm(){
    const feedbackContato = document.querySelector("#duvida .feedbackContato")
    const inputNome = document.getElementById("nomeContato")
    const sobrenomeContato = document.getElementById("sobrenomeContato")
    const emailContato = document.getElementById("emailContato")
    const telefoneContato = document.getElementById("telefoneContato")
    const dataNascimentoContato = document.getElementById("dataNascimentoContato")
    const cpfContato = document.getElementById("cpfContato")
    const comentario = document.getElementById("comentarioContato")

    const valorNome = inputNome.value 
    const valorSobrenome = sobrenomeContato.value
    const valorEmail = emailContato.value
    const valorTel = telefoneContato.value
    const valorDataNas = dataNascimentoContato.value
    const valorCpf = cpfContato.value

    const valorMensagem = comentario.value

    if(!valorNome || !valorCpf || !valorDataNas || !valorTel || !valorSobrenome) {
        feedbackContato.textContent = "Preencha os campos"
        return
    }

    if(!valorEmail.includes("@") || !valorEmail.includes(".com")){
        feedbackContato.textContent = "Erro no email"
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
    contModal.innerHTML = ""

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

function alterarForm(){
    const page = selectForm.value

    if(page == "duvida"){
        formDuvida.classList.remove("hidden")
        formReserva.classList.add("hidden")
    } else {
        formDuvida.classList.add("hidden")
        formReserva.classList.remove("hidden")
    }
}

function atualizarDataHospedagem(){
    const agora = new Date()
    const hoje = new Date(agora.getTime() - agora.getTimezoneOffset() * 60000)
    dataHospedagem.min = hoje.toISOString().split("T")[0]
}

function gerarOrcamento(){
    atualizarDataHospedagem()
    resultadoReserva.classList.remove("hidden")

    const nome = document.getElementById("nomeReserva").value
    const sobrenome = document.getElementById("sobrenomeReserva").value
    const email = document.getElementById("emailReserva").value
    const diarias = document.getElementById("diariasReserva").value
    const suite = document.getElementById("suiteReserva")
    const genero = document.querySelector(".generoReserva:checked")
    const dataInicio = dataHospedagem.value
    const campos = [nome, sobrenome, email.includes("@"), dataInicio, suite.value, genero, diarias]
    let camposVazios = 0

    campos.forEach(campo =>{
        if(!campo){
            camposVazios++
        }
    })

    if(camposVazios > 0){
        resultadoReserva.textContent = "Preencha os campos da reserva."
        return
    }

    if(diarias < 1){
        resultadoReserva.textContent = "Informe pelo menos uma diária."
        return
    }

    if(!(diarias == Math.round(diarias))){
        resultadoReserva.textContent = "Informe um número inteiro de diárias."
        return
    }

    const inicio = new Date(dataInicio)
    if(inicio < new Date(dataHospedagem.min)){
        resultadoReserva.textContent = "Escolha a data de hoje ou uma data futura."
        return
    }

    const fim = new Date(inicio.getTime() + diarias * 86400000)
    if(!(fim > inicio)){
        resultadoReserva.textContent = "Confira a data de início e o número de diárias."
        return
    }

    const dataFinal = fim.toISOString().split("T")[0]
    const refeicoes = document.querySelectorAll(".adicionalReserva:checked")
    let adicionais = ""
    let valorAdicionais = 0

    refeicoes.forEach(refeicao =>{
        if(adicionais == ""){
            adicionais = refeicao.dataset.nome
        } else {
            adicionais += ", " + refeicao.dataset.nome
        }
        valorAdicionais += refeicao.value * diarias
    })

    if(adicionais == ""){
        adicionais = "Nenhum"
    }

    const total = suite.value * diarias + valorAdicionais
    const suiteEscolhida = document.querySelector("#suiteReserva option:checked")
    const dados = [
        "Primeiro nome: " + nome,
        "Segundo nome: " + sobrenome,
        "E-mail: " + email,
        "Gênero: " + genero.value,
        "Acomodação: " + suiteEscolhida.textContent,
        "Início da hospedagem: " + dataInicio,
        "Fim previsto: " + dataFinal,
        "Número de diárias: " + diarias,
        "Valor por diária: R$ " + suite.value + ",00",
        "Adicionais: " + adicionais,
        "Valor dos adicionais: R$ " + valorAdicionais + ",00",
        "Total do orçamento: R$ " + total + ",00",
    ]

    resultadoReserva.textContent = ""
    dados.forEach(dado =>{
        const linha = document.createElement("p")
        linha.textContent = dado
        resultadoReserva.appendChild(linha)
    })
}

selectForm.addEventListener("change", alterarForm)
alterarForm()

atualizarDataHospedagem()
btnOrcamento.addEventListener("click", gerarOrcamento)
btnEnviarContato.addEventListener("click", respostaForm)

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