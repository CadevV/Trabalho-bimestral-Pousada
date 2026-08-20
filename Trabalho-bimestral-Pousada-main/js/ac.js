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
const btnMenuClose = document.querySelector('.btnMenuClose')
const contMenu = document.querySelector('.contMenu')
const btnRedes = document.querySelectorAll('.btnRedes')
const btnOpenModal = document.querySelectorAll(".btnInfo");
const btnCloseModal = document.querySelector(".btnCloseModal");
const modalAc = document.querySelector(".modalQuarto");
const numTotal = document.querySelector(".numTotal");
const numCasal = document.querySelector(".numCasal");
const numFamilia = document.querySelector(".numFamilia");
const quartosFamilia = document.querySelectorAll(".familia");
const quartosCasal = document.querySelectorAll(".casal");
const btnTotal = document.getElementById("btnTotal");
const btnCasal = document.getElementById("btnCasal");
const btnFamilia = document.getElementById("btnFamilia");
const modalImg = document.querySelector(".modalImg");
const modalTitulo = document.querySelector(".modalTitulo");
const modalDescricao = document.querySelector(".modalDescricao");
const modalPreco = document.querySelector(".modalPreco");

function atualizarQuartos() {
  numTotal.textContent = quartosFamilia.length + quartosCasal.length;
  numCasal.textContent = quartosCasal.length;
  numFamilia.textContent = quartosFamilia.length;
}

btnRedes.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = element.dataset.url
    })
})

btnMenu.addEventListener('click', ()=>{
    contMenu.classList.add('active')
})

btnMenuClose.addEventListener('click', ()=>{
    contMenu.classList.remove('active')
})

btnTotal.addEventListener("click", () => {
  btnCasal.classList.remove("active");
  btnFamilia.classList.remove("active");
  btnTotal.classList.add("active");

  quartosFamilia.forEach((element) => {
    element.classList.remove("off");
  });

  quartosCasal.forEach((element) => {
    element.classList.remove("off");
  });
});

btnCasal.addEventListener("click", () => {
  btnCasal.classList.add("active");
  btnFamilia.classList.remove("active");
  btnTotal.classList.remove("active");

  quartosFamilia.forEach((element) => {
    element.classList.add("off");
  });

  quartosCasal.forEach((element) => {
    element.classList.remove("off");
  });
});

btnFamilia.addEventListener("click", () => {
  btnCasal.classList.remove("active");
  btnFamilia.classList.add("active");
  btnTotal.classList.remove("active");

  quartosFamilia.forEach((element) => {
    element.classList.remove("off");
  });

  quartosCasal.forEach((element) => {
    element.classList.add("off");
  });
});

btnOpenModal.forEach((botao) => {
  botao.addEventListener("click", () => {
    const id = botao.dataset.id;
    const quarto = quartosModal.find((q) => q.dataId === id);

    modalImg.src = quarto.img;
    modalImg.alt = quarto.nome;
    modalTitulo.textContent = quarto.nome;
    modalDescricao.textContent = quarto.descricao;
    modalPreco.textContent = "R$ " + quarto.preco + " / noite";

    modalAc.classList.add("active");
    document.body.classList.add("modalOpen");
  });
});

btnCloseModal.addEventListener("click", () => {
  modalAc.classList.remove("active");
  document.body.classList.remove("modalOpen");
});

atualizarQuartos();
