const ratingCards = document.querySelectorAll('.rating');

if (ratingCards.length) {
    ratingCards.forEach(el => {
        const btn = el.querySelector('.rating-right button');
        const ratingRight = el.querySelector('.rating-right');

        btn.onclick = () => {
            ratingRight.classList.toggle('active');
        }
    })
}