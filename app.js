//Regular Element Selecting
const fullScreenElement = document.querySelector('#full-screen-img-holder'),
    images = document.querySelectorAll('img');

//Fadein Animation & Lazy Loading
const fadeInElements = document.querySelectorAll('.fade-in'),
    HomeFadeIn = document.querySelectorAll('.home-fade-in');

images.forEach(img => {
    img.addEventListener('click', enlargeImage)
})

//Render the image in full screen
function enlargeImage() {
    if (this) {
        let src = this.src;

        let imgElement = document.createElement('img');
        imgElement.classList.add('full-screen-img');
        imgElement.src = src;

        fullScreenElement.appendChild(imgElement);
        fullScreenElement.classList.add('active');
        stopScrolling.classList.add('stop-scrolling');
    }
}

//Click and close the full screen image
fullScreenElement.addEventListener('click', () => {
    fullScreenElement.classList.remove('active');
    fullScreenElement.removeChild(fullScreenElement.lastChild);
    stopScrolling.classList.remove('stop-scrolling');
})


// reference: https://www.youtube.com/watch?v=T33NN_pPeNI&t=19s&ab_channel=BeyondFireship
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

fadeInElements.forEach(el => {
    observer.observe(el);
})

HomeFadeIn.forEach(el => {
    observer.observe(el);
}) 