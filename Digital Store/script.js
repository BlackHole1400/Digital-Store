const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 200);
  });
});