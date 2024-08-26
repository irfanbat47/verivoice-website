// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Learn More button scroll to Features section
document.getElementById('learn-more').addEventListener('click', function() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
    });
});
