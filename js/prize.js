const openBtn = document.getElementById('btn_prize_open');
const popUp = document.getElementById('prize_pop-up');
const closeBtn = document.getElementById('prize_pop-up__close');

function popUpToggle() {
    popUp.classList.toggle('hidden');
}
openBtn.onclick = popUpToggle;
closeBtn.onclick = popUpToggle;