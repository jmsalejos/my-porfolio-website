function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}



const elements = document.querySelectorAll('.fade-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));

