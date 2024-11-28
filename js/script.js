const btn = document.querySelector('.burger'),
    page = document.querySelector('.page'),
    navi = document.querySelector('.navi');

btn.addEventListener('click', () => {
    navi.classList.toggle('active');
})
// page.addEventListener('click', () => {
//     if
//     navi.classList.remove('active');
// })