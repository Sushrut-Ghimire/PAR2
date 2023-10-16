document.addEventListener('scroll', () => {
    const nav = document.getElementById('A');

    if (window.scrollY > 800){
        nav.classList.add('active');
    }

})

document.addEventListener('scroll', () => {
    const nav = document.getElementById('B');

    if (window.scrollY > 800){
        nav.classList.add('active');
    }

})

document.addEventListener('scroll', () => {
    const nav = document.getElementById('C');

    if (window.scrollY > 800){
        nav.classList.add('active');
    }

})