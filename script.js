document.querySelector('.cover').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.inside').style.display = 'block';
});

function showSurprise() {
    document.getElementById('surpriseMessage').style.display = 'block';
}
