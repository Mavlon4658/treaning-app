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

const ratingModal = document.querySelector('.rating-modal');
const ratingModalOpen = document.querySelectorAll('.rating-modal__open');
const ratingModalBg = document.querySelector('.rating-modal__bg');
const ratingModalBtn = document.querySelector('.rating-modal .btn-green');

if (ratingModalOpen.length) {
    ratingModalOpen.forEach(el => {
        el.onclick = () => {
            ratingModal.classList.add('active');
        }
    })

    ratingModalBtn.onclick = () => {
        ratingModal.classList.remove('active');
    }

    ratingModalBg.onclick = () => {
        ratingModal.classList.remove('active');
    }
}