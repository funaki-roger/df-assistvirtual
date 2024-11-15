/*=============== SHOW SIDEBAR ===============*/

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

/*=============== Share Social ===============*/

// Função para exibir o modal de notificação
function showCopyModal() {
    const copyModal = document.getElementById('copyModal');
    copyModal.classList.add('show');

    // Remove a notificação após 3 segundos
    setTimeout(() => {
        copyModal.classList.remove('show');
    }, 3000);
}

// Evento para simular a ação de copiar link
document.querySelector('.btn__share').addEventListener('click', () => {
    // Simula a cópia do link
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            showCopyModal(); // Exibe o modal de notificação
        })
        .catch(err => {
            console.error('Erro ao copiar o link: ', err);
        });
});

// Salvar a posição de rolagem antes de recarregar a página
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Restaurar a posição de rolagem e seção ao recarregar a página
window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        localStorage.removeItem('scrollPosition');
    }

    // Ajuste para redirecionar à seção correta ao carregar a página
    const path = window.location.pathname.substring(1); // Remove a barra inicial "/"
    if (path) {
        const targetElement = document.getElementById(path);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/*===== Nav Active Link =====*/
// Configuração para rolagem suave e atualização de URL com alias
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rolagem suave até o elemento
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Atualiza a URL sem o "#" e sem recarregar a página
        history.pushState(null, null, `/${targetId}`);
    });
});

// Destaque da seção ativa com base na rolagem
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Verifica se a rolagem está dentro da seção atual
        if (scrollPos >= sectionTop - windowHeight / 3 && scrollPos < sectionTop + sectionHeight - windowHeight / 3) {
            // Remove a classe active-link da seção anterior
            const activeLink = document.querySelector('.nav__link.active-link');
            if (activeLink) {
                activeLink.classList.remove('active-link');
            }
            
            // Adiciona a classe active-link à nova seção
            const newActiveLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            if (newActiveLink) {
                newActiveLink.classList.add('active-link');
            }

            // Atualiza a URL para o alias da seção atual
            history.pushState(null, null, `/${sectionId}`);
        }
    });
});

/*===== Work Popup =====*/

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// Fecha o modal quando clicar fora dele
window.addEventListener('click', (event) => {
    modalViews.forEach((modalView) => {
        if (event.target === modalView) {
            modalView.classList.remove('active-modal');
        }
    });
});

/*=============== SWIPER TESTIMONIAL ===============*/
document.addEventListener("DOMContentLoaded", function() {
    let swiper = new Swiper(".testimonials__container", {
        spaceBetween: 24,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000, // Temporizador de 5 segundos
            disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
        },
    });
});

/*=============== INPUT ANIMATION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== body ===============*/
