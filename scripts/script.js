const toggleButton = document.getElementsByClassName('toggle')[0]
const headerNav = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    headerNav.classList.toggle('active')
})