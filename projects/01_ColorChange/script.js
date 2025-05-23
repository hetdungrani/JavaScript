const body = document.querySelector('body')
const box = document.querySelectorAll('.box')
let e
box.forEach(function (box) {
    // console.log(box)    
    box.addEventListener('click', function (e) {
        // console.log(e)
        // console.log(e.target)

        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
            body.style.color="black"
        };
        if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id
            body.style.color="white"
        }
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
            body.style.color="white"
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id
            body.style.color="white"
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id
            body.style.color="white"
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
            body.style.color="black"
        }
    })
})