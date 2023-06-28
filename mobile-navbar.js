// Corrigir Botao de pesquisar, duvida!
const searchLink = document.getElementById('searchLink');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchLink.addEventListener('click', function() {
    searchContainer.style.display = 'flex';
    searchInput.focus();
});

searchButton.addEventListener('click', function() {
    //
    // 
    console.log('Termo de pesquisa:', searchInput.value);
});

/* alterações, dps refatorar o cod  */
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = Array.from(document.getElementsByClassName("slide"));
let currentSlide = 0;

// Função para exibir o slide atual
function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// aq é a func de clique no botão de avançar
nextBtn.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
});

// aq é a func de clique no botão de voltar
prevBtn.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

// aq ele exibe o primeiro slide ao carregar a página
showSlide();

// Verifica se o botão foi clicado e executa a função toggleFavorite
document.getElementById('favoriteButton').addEventListener('click', toggleFavorite);

// Função para alternar o estado de favorito
function toggleFavorite() {
  var button = document.getElementById('favoriteButton');
  
  // Verifica se o botão está marcado como favorito
  if (button.classList.contains('favorited')) {
    button.classList.remove('favorited');
    button.textContent = 'Favoritar';
    // Coloque aqui a lógica para remover dos favoritos
  } else {
    button.classList.add('favorited');
    button.textContent = 'Favoritado';
    // Coloque aqui a lógica para adicionar aos favoritos
  }
}

function toggleFavorite() {
  var favoriteBtn = document.getElementById('favoriteBtn');

  if (favoriteBtn.classList.contains('active')) {
    // Remove a classe 'active' e redefine o texto do botão
    favoriteBtn.classList.remove('active');
    favoriteBtn.innerText = 'Favoritar';
    // Lógica para remover do favorito aqui
  } else {
    // Adiciona a classe 'active' e redefine o texto do botão
    favoriteBtn.classList.add('active');
    favoriteBtn.innerText = 'Favoritado';
    // Lógica para adicionar aos favoritos aqui
  }
}



jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 2000);
  });
  
	var slideCount = $('#slider slide').length;
	var slideWidth = $('#slider slide').width();
	var slideHeight = $('#slider slide').height();
	var slideWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider').css({ width: slideWidth, marginLeft: - slideWidth });
	
    $('#slider slide:last-child').prependTo('#slider');

    function moveLeft() {
        $('#slider').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider slide:last-child').prependTo('#slider');
            $('#slider').css('left', '');
        });
    };

    function moveRight() {
        $('#slider').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider slide:first-child').appendTo('#slider');
            $('#slider').css('left', '');
        });
    };

    $('slider.prevBtn').click(function () {
        moveLeft();
    });

    $('slider.prevBtn').click(function () {
        moveRight();
    });
});    






// class MobileNavBar {
//     constructor(mobileMenu) {
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.navList = document.querySelector(navList);
//         this.navLinks = document.querySelectorAll(navLinks);
//         this.activeClass = "active";

//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLinks() {
//         this.navLinks.forEach((link, index) => {
            
// link.style.animation 
// ? (link.style.animation = "")
// : (link.style.animation = 'navLinkFade 0,5s ease forwards 0.3s');
// {index / 7 + 0.3}s;
//         });
//     }


// handleClick() {
//     this.navList.classList.toggle(this.activeClass);
//     this.mobileMenu.classList.toggle(this.activeClass);
//     this.animateLinks();
// }

//     addClickEvent() {
//         this.mobileMenu.addEventListener("click", this.handleClick);      
//     }

//     init() {
//        if (this.mobileMenu) {
//         this.addClickEvent();
//        }
//        return this;
//     }
// }

// const MobileNavBar = new MobileNavBar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list li",
// );
// mobileNavbar.init();

