const players = document.querySelectorAll(".player");
const playButtons = document.querySelectorAll(".play");
const pauseButtons = document.querySelectorAll(".pause");
const musicas = document.querySelectorAll(".musica");

playButtons.forEach((playButton, index) => {
  playButton.addEventListener("click", function () {
    musicas.forEach((audio) => {
      audio.pause();
    });
    musicas[index].play();
  });
});

pauseButtons.forEach((pauseButton, index) => {
  pauseButton.addEventListener("click", function () {
    musicas[index].pause();
  });
});

const imagemMaior = document.querySelector("#imagemMaior");
const thumbnails = document.querySelectorAll(".fotos-galerias img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((tn) => tn.classList.remove("ativo"));
    imagemMaior.src = thumbnail.src;
    thumbnail.classList.add("ativo");
  });
});

const abrirModal = document.querySelector('[data-modal="abrir"]');
const fecharModal = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

if (abrirModal && fecharModal && containerModal) {
  function modalAbrir(event) {
    event.preventDefault();
    containerModal.classList.add("ativo-modal");
  }

  function modalFechar(event) {
    event.preventDefault();
    containerModal.classList.remove("ativo-modal");
  }

  function outsideClick(event) {
    if (event.target === this) {
      modalFechar(event);
    }
  }

  abrirModal.addEventListener("click", modalAbrir);
  fecharModal.addEventListener("click", modalFechar);
  containerModal.addEventListener("click", outsideClick);
}

const linkInterno = document.querySelectorAll('a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior:'smooth',
        block: 'start',
    });
    // const top = section.offsetTop;
    // window.scrollTo({
    //     top: top,
    //     behavior: 'smooth'
    // })
}

linkInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});