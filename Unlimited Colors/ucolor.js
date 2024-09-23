//generate r random color

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let chnageColor;
const startColorChanging = function () {

    function changeBG() {
        document.body.style.backgroundColor = randomColor()
    }

    if (!chnageColor) {
        chnageColor = setInterval(changeBG, 100);
    }
}
const stopColorChanging = function () {
    clearInterval(chnageColor)
    chnageColor = null
}

document.querySelector('#start').addEventListener('click', startColorChanging)
document.querySelector('#stop').addEventListener('click', stopColorChanging)