let popupOpen = document.querySelector('.popup-open'),
    popupClose = document.querySelector('.popup-close'),
    popupMenu = document.querySelector('.m-popup')


popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    popupMenu.classList.remove('popup-hide')
    popupMenu.classList.add('popup-show')
    popupOpen.style.display = 'none'
    popupClose.style.display = 'block'
})
popupClose.addEventListener('click', function (evt) {
    evt.preventDefault()
    popupMenu.classList.add('popup-hide')
    setTimeout(function () {
        popupMenu.classList.remove('popup-show')
        popupMenu.style.transform = 'translateY(0)'
    }, 200)
    popupClose.style.display = 'none'
    popupOpen.style.display = 'block'
})