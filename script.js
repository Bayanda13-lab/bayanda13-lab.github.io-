document.getElementById('year').textContent =
    new Date().getFullYear();


const menu = document.getElementById('menu');
const links = document.getElementById('links');


menu.onclick = () => {
    links.classList.toggle('open');
};


document.querySelectorAll('#links a').forEach(a => {

    a.onclick = () => {
        links.classList.remove('open');
    };

});


const obs = new IntersectionObserver(

    entries => {

        entries.forEach(e => {

            if (e.isIntersecting) {

                e.target.classList.add('show');

            }

        });

    },

    {
        threshold: .12
    }

);


document.querySelectorAll('.reveal').forEach(e => {

    e.style.opacity = 0;

    e.style.transform = 'translateY(18px)';

    e.style.transition =
        'opacity .7s, transform .7s';

    obs.observe(e);

});


const style = document.createElement('style');

style.textContent = `

.reveal.show {

    opacity: 1 !important;

    transform: none !important;

}

`;

document.head.appendChild(style);
