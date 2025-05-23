const display = document.querySelector('.display')
const start = document.querySelector('h1')

start.addEventListener('click', function (e) {
    setInterval(function () {
        let date = new Date();
        display.innerHTML = date.toLocaleTimeString()
    }, 0)
})


