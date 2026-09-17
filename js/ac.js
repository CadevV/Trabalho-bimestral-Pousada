const quartosModal = [
  {
    dataId: "1",
    nome: "Quarto de Casal Econômico",
    img: "images/quartoCasal.jfif",
    descricao:
      "Opção mais em conta pra casais, com o essencial pra uma estadia confortável.",
    preco: 250,
  },
  {
    dataId: "2",
    nome: "Quarto Família com Varanda",
    img: "images/quartoFamilia.webp",
    descricao:
      "Varanda privativa com vista pro jardim, ótimo pra relaxar em família.",
    preco: 450,
  },
  {
    dataId: "3",
    nome: "Quarto de Casal Vista Pôr do Sol",
    img: "images/quartoSuite.webp",
    descricao: "Posição privilegiada pra ver o pôr do sol direto da cama.",
    preco: 380,
  },
  {
    dataId: "4",
    nome: "Quarto Família Térreo",
    img: "images/quartoFamilia.webp",
    descricao:
      "Acesso fácil sem escadas, ideal pra famílias com crianças pequenas ou idosos.",
    preco: 400,
  },
  {
    dataId: "5",
    nome: "Quarto de Casal Standard",
    img: "images/quartoCasal.jfif",
    descricao: "Conforto e privacidade pra dois, com cama de casal e varanda.",
    preco: 300,
  },
  {
    dataId: "6",
    nome: "Quarto de Casal Vista Lagoa",
    img: "images/quartoCasal.jfif",
    descricao: "Mesmo conforto do standard, com vista privilegiada pra lagoa.",
    preco: 340,
  },
  {
    dataId: "7",
    nome: "Suíte de Casal Luxo",
    img: "images/quartoSuite.webp",
    descricao: "Banheira, varanda duplex e vista para as dunas ao amanhecer.",
    preco: 600,
  },
  {
    dataId: "8",
    nome: "Quarto de Casal Romântico",
    img: "images/quartoCasal.jfif",
    descricao: "Ambiente intimista, perfeito pra lua de mel ou aniversário.",
    preco: 420,
  },
  {
    dataId: "9",
    nome: "Suíte de Casal Vista Dunas",
    img: "images/quartoSuite.webp",
    descricao: "Janelas amplas de frente pras dunas, ideal ao nascer do sol.",
    preco: 650,
  },
  {
    dataId: "10",
    nome: "Quarto Família Standard",
    img: "images/quartoFamilia.webp",
    descricao: "Espaço amplo com duas camas de casal, perfeito pra famílias.",
    preco: 480,
  },
  {
    dataId: "11",
    nome: "Quarto Família Premium",
    img: "images/quartoFamilia.webp",
    descricao: "Área de estar extra e frigobar, pra quem viaja em grupo maior.",
    preco: 580,
  },
  {
    dataId: "12",
    nome: "Quarto Família Vista Dunas",
    img: "images/quartoFamilia.webp",
    descricao: "Mesmo espaço do standard, com janelas voltadas pras dunas.",
    preco: 520,
  },
  {
    dataId: "13",
    nome: "Quarto Família Econômico",
    img: "images/quartoCompartilhado.webp",
    descricao:
      "Opção mais em conta, com o essencial pra receber toda a família.",
    preco: 350,
  },
  {
    dataId: "14",
    nome: "Quarto Família Ampliado",
    img: "images/quartoCompartilhado.webp",
    descricao:
      "Camas extras disponíveis, ideal pra grupos maiores de parentes.",
    preco: 550,
  },
];

const btnMenu = document.querySelector('.btnMenu')
const btnMenuFechar = document.querySelector('.btnMenuFechar')
const navMenu = document.querySelector('.navMenu')
const btnRedeSocial = document.querySelectorAll('.btnRedeSocial')
const btnOpenModal = document.querySelectorAll(".btnQuartoInfo");
const btnQuartoModalFechar = document.querySelector(".btnQuartoModalFechar");
const modalAc = document.querySelector(".quartoModal");
const filtroTotalNumero = document.querySelector(".filtroTotalNumero");
const filtroCasalNumero = document.querySelector(".filtroCasalNumero");
const filtroFamiliaNumero = document.querySelector(".filtroFamiliaNumero");
const quartosFamilia = document.querySelectorAll(".quartoFamilia");
const quartosCasal = document.querySelectorAll(".quartoCasal");
const btnTotal = document.getElementById("btnTotal");
const btnCasal = document.getElementById("btnCasal");
const btnFamilia = document.getElementById("btnFamilia");
const quartoModalImagem = document.querySelector(".quartoModalImagem");
const quartoModalTitulo = document.querySelector(".quartoModalTitulo");
const quartoModalDescricao = document.querySelector(".quartoModalDescricao");
const quartoModalPreco = document.querySelector(".quartoModalPreco");

function atualizarQuartos() {
  filtroTotalNumero.textContent = quartosFamilia.length + quartosCasal.length;
  filtroCasalNumero.textContent = quartosCasal.length;
  filtroFamiliaNumero.textContent = quartosFamilia.length;
}

btnRedeSocial.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = element.dataset.url
    })
})

btnMenu.addEventListener('click', ()=>{
    navMenu.classList.add('isActive')
})

btnMenuFechar.addEventListener('click', ()=>{
    navMenu.classList.remove('isActive')
})

btnTotal.addEventListener("click", () => {
  btnCasal.classList.remove("isActive");
  btnFamilia.classList.remove("isActive");
  btnTotal.classList.add("isActive");

  quartosFamilia.forEach((element) => {
    element.classList.remove("isHidden");
  });

  quartosCasal.forEach((element) => {
    element.classList.remove("isHidden");
  });
});

btnCasal.addEventListener("click", () => {
  btnCasal.classList.add("isActive");
  btnFamilia.classList.remove("isActive");
  btnTotal.classList.remove("isActive");

  quartosFamilia.forEach((element) => {
    element.classList.add("isHidden");
  });

  quartosCasal.forEach((element) => {
    element.classList.remove("isHidden");
  });
});

btnFamilia.addEventListener("click", () => {
  btnCasal.classList.remove("isActive");
  btnFamilia.classList.add("isActive");
  btnTotal.classList.remove("isActive");

  quartosFamilia.forEach((element) => {
    element.classList.remove("isHidden");
  });

  quartosCasal.forEach((element) => {
    element.classList.add("isHidden");
  });
});

btnOpenModal.forEach((botao) => {
  botao.addEventListener("click", () => {
    const id = botao.dataset.id;
    const quarto = quartosModal.find((q) => q.dataId === id);

    quartoModalImagem.src = quarto.img;
    quartoModalImagem.alt = quarto.nome;
    quartoModalTitulo.textContent = quarto.nome;
    quartoModalDescricao.textContent = quarto.descricao;
    quartoModalPreco.textContent = "R$ " + quarto.preco + " / noite";

    modalAc.classList.add("isActive");
    document.body.classList.add("quartoModalAberto");
  });
});

btnQuartoModalFechar.addEventListener("click", () => {
  modalAc.classList.remove("isActive");
  document.body.classList.remove("quartoModalAberto");
});

atualizarQuartos();
