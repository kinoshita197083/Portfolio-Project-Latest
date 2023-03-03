const fadeInElements = document.querySelectorAll('.fade-in');

// reference: https://www.youtube.com/watch?v=T33NN_pPeNI&t=19s&ab_channel=BeyondFireship

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

fadeInElements.forEach(el => {
    observer.observe(el);
})