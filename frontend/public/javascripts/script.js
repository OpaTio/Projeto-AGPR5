const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('C-prev-button');
const btnNext = document.getElementById('C-next-button');
const btntable = document.getElementById('icon-table');
const btncarrousel = document.getElementById('icon-carrousel');


let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

const Tabela = [{
    filename: "Carrousel1.jpg",
    url: "https://img.com/img.jpg",
 },{
    filename: "Carrousel2.jpg",
    url: "https://img.com/img2.jpg",
 },{
    filename: "Carrousel3.jpg",
    url: "https://img.com/img3.jpg",
 },
,]
// Botões dos ícones para mudar de tabela para galeria
function toggleDisplayImg() {

  const table = document.getElementById('table');
  const carrousel = document.getElementById('carrousel');
  const txtcarrousel = document.getElementById('Title-C')
  const txttable = document.getElementById('Title-Alt')

  if (table.style.display === 'flex') {
    table.style.display = 'none';
    carrousel.style.display = 'flex';
    txtcarrousel.style.display = 'block';
    txttable.style.display = 'none';

  } else {
    table.style.display = 'none';
    carrousel.style.display = 'flex';
    txtcarrousel.style.display = 'block';
    txttable.style.display = 'none';
  }
}

function toggleDisplayTabl() {

  const table = document.getElementById('table');
  const carrousel = document.getElementById('carrousel');
  const txtcarrousel = document.getElementById('Title-C')
  const txttable = document.getElementById('Title-Alt')

  if (table.style.display === 'flex') {
    table.style.display = 'flex';
    carrousel.style.display = 'none';
    txtcarrousel.style.display = 'none';
    txttable.style.display = 'block';

  } else {
    table.style.display = 'flex';
    carrousel.style.display = 'none';
    txtcarrousel.style.display = 'none';
    txttable.style.display = 'block';
  }
}


btntable.addEventListener('click', toggleDisplayTabl)
btncarrousel.addEventListener('click', toggleDisplayImg)
   
