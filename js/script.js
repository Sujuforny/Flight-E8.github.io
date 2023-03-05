function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

btnContinue.addEventListener("click", function() {
    toggle();
});
btnPopupClose.addEventListener("click", function() {
    toggle();
})