function showImage(src) {
document.getElementById('popup-img').src = src;
document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}

function toggleList(id) {
const list = document.getElementById(id);

if (list.classList.contains('open')) {
list.style.maxHeight = '0';
list.classList.remove('open');
} else {
const allLists = document.querySelectorAll('.liste');
allLists.forEach((l) => {
l.style.maxHeight = '0';
l.classList.remove('open');
});

list.classList.add('open');
list.style.maxHeight = list.scrollHeight + 'px';
}
}
