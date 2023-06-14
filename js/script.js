
/*---------------------------- alternar ícone da barra de navegação  -------------------------------------*/
let menuIcon = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('action');
};

/*---------------------------- link ativo das seções de rolagem ------------------------------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('action');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('action');
            });
        };
    });

    /*---------------------------- barra de navegação  ------------------------------------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*------- remover o ícone de alternância é a barra de navegação ao clicar na barra de navegação  ----*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('action');
};

/*---------------------------- revelar rolagem  ------------------------------------------*/
ScrollReveal({
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.inicio-conteudo, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.imagem-inicio, .servicos-conteudo, .portifolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.inicio-conteudo h1, .sobre-imagem', { origin: 'left' });
ScrollReveal().reveal('.inicio-conteudo p, .sobre-conteudo', { origin: 'right' });

/*---------------------------- texto multiplo  ------------------------------------------*/
const typed = new Typed('.multiplo-texto', {
    strings : ['Qualidade','Segurança','Preço Justo'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});