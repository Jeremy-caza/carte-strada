function showImage(src) {
document.getElementById('popup-img').src = src;
document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}

function toggleList(id) {
const list = document.getElementById(id);
if (!list) return;

list.classList.toggle('open');
}
