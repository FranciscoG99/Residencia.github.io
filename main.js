const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
})


const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg")

function openFulImg(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg() {
    fulImgBox.style.display = "none";
}


//PRIMER INTENTO DE ESCONDER EL ICONO DE INICIO

// let ubicacionPrincipal = window.pageYOffset
// let $nav = document.querySelector('#nav')

// window.addEventListener('scroll', function () {
//     let ubicacionActual = window.pageYOffset

//     console.log(ubicacionActual);

//     if (ubicacionPrincipal >= ubicacionActual) {
//         $nav.style.top = "-48px"
//     } else {
//         $nav.style.top = "247px"
//     }

//     ubicacionPrincipal = ubicacionActual
// })


//SEGUNDO INTENTO DE ESCONDER EL ICONO DE INICIO


// let ultimoScroll = 0;
// let cero = 0;

// $(document).ready(function () {
//     $(window).on('scroll', function () {
//         st = $(window).scrollTop();
//         if (st > ultimoScroll) {
//             $('nav').addClass('hide');
//         } else {
//             $('nav').removeClass('hide');
//         }
//         ultimoScroll = st;
//         cero = $(window).scrollTop();
//     })
// })

//TERCER INTENTO DE ESCONDER EL ICONO DE INICIO

let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 50 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarAbajo")
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

// <> 