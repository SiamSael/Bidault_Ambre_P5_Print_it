const assetsImagesSlidesShowDirectory = './assets/images/slideshow/'
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const loadSlide = (index) => {
	document.querySelector('.banner-img').src = assetsImagesSlidesShowDirectory + slides[index].image
	document.querySelector('#banner > p').innerHTML = slides[index].tagLine
	document.querySelector('.dot_selected').classList.remove('dot_selected')
	document.querySelector('[data-slide="' + index + '"]').classList.add('dot_selected')
}

const arrowLeft = () => {
	let selectedDotIndex = parseInt(document.querySelector('.dot_selected').dataset.slide)
	loadSlide(selectedDotIndex == 0 ? slides.length - 1 : selectedDotIndex - 1)
}

const arrowRight = () => {
	let selectedDotIndex = parseInt(document.querySelector('.dot_selected').dataset.slide)
	loadSlide(selectedDotIndex == slides.length - 1 ? 0 : selectedDotIndex + 1)
}

const genSlidersDot = (slide, index) => {
	var dot = document.createElement('span')
	dot.className = 'dot' + (index == 0 ? ' dot_selected' : '')
	dot.dataset.slide = index
	document.getElementById('dots').append(dot)
}

const genSlidersDots = () => {
	slides.forEach(genSlidersDot)
}

genSlidersDots()

document.getElementById('arrow_left').addEventListener('click', arrowLeft)
document.getElementById('arrow_right').addEventListener('click', arrowRight)
