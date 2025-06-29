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
Element.classList.remove('active');
} else {
const allLists = document.querySelectorAll('.liste');
const allcategories = document.querySelectorAll('.categorie');

allLists.forEach((l) => {
l.style.maxHeight = '0';
l.classList.remove('open');
});

allcategories.forEach((c)=> {
    c.classList.remove('active');
})

list.classList.add('open');
list.style.maxHeight = list.scrollHeight + 'px';
element.classList.add('active');
}
}
