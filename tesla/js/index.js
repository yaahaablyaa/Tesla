let body = document.body
let container = document.querySelector('.container')
let div = document.querySelector('.div')
let tesla_car = document.querySelector('.tesla')
let modal = document.querySelector('.modal')
let auto = document.querySelector('#auto')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let round_bg = document.querySelectorAll('.round_bg')
let km = document.querySelector('#km')
let kmm = document.querySelector('.kmm')
let zapas = document.querySelector('.kmmm')
let inp = document.querySelector('.ipp')
let btn_clr = document.querySelectorAll('button[data-color]')
let salon_color_img = document.querySelector('.salon_color_img')
let gradus = document.querySelector('.gradus')
let plus_gradus = document.querySelector('#plus_gradus')
let minus_gradus = document.querySelector('#minus_gradus')
let price_tesla = document.querySelector('#price_tesla')
let wheel = document.querySelectorAll('button[data-wheels]')
let twentyOnetwentyOne = document.querySelector('#twentyOne')
let information = document.querySelector('.information')

tesla_car.onclick = () => {
    tesla_car.style.marginTop = "140px"
    tesla_car.style.marginBottom = "400px"
    body.style.transform = "scale(3)"
    body.style.overflow = "hidden"
    tesla_car.style.transition = "1s"
    body.style.transition = "1s"

    setTimeout(() => {
        modal.style.opacity = "1"
        modal.style.display = "block"
        body.style.transform = "scale(1)"
        body.style.overflow = ""
        modal.style.height = "600px"

        container.style.display = "none"
        div.style.display = "none"
    }, 2400);
}

inp.onclick = () => {
    tesla_car.style.marginTop = "140px"
    tesla_car.style.marginBottom = "400px"
    body.style.transform = "scale(3)"
    body.style.overflow = "hidden"
    tesla_car.style.transition = "1s"
    body.style.transition = "1s"

    setTimeout(() => {
        modal.style.opacity = "1"
        modal.style.display = "block"
        body.style.transform = "scale(1)"
        body.style.overflow = ""
        modal.style.height = "600px"

        container.style.display = "none"
        div.style.display = "none"
    }, 2400);
}

auto.onclick = () => {
    setTimeout(() => {
        tesla_car.style.marginTop = ""
        tesla_car.style.marginBottom = ""

        modal.style.opacity = "0"
        modal.style.display = "none"

        container.style.display = "block"
        div.style.display = "block"

        document.querySelector('.container').style.display = 'flex'
        document.querySelector('.div').style.display = 'flex'
    }, 500);
}

let clr_ = {
    brown: "../img/black.png",
    gold: "../img/gold.png",
    white: "../img/white.png"
}

btn_clr.forEach(clr__ => {
    clr__.onclick = () => {
        let key = clr__.getAttribute('data-color')
        salon_color_img.style.background = `url("${clr_[key]}")`
        salon_color_img.style.backgroundSize = "contain"
        salon_color_img.style.backgroundRepeat = "no-repeat"
    }
});

plus.onclick = () => {
    round_bg.forEach((round) => {
        round.style.animationDuration = `.3s`
        kmm.innerHTML = +kmm.innerHTML + 15
        zapas.innerHTML -= 10
    })
}

minus.onclick = () => {
    round_bg.forEach((round) => {
        round.style.animationDuration = `1s`
        kmm.innerHTML = +kmm.innerHTML - 15
        zapas.innerHTML = +zapas.innerHTML + 10
    })
}

plus_gradus.onclick = () => {
    gradus.innerHTML = '+'+ `${+gradus.innerHTML + 10}`
    zapas.innerHTML -= 16
}

minus_gradus.onclick = () => {
    gradus.innerHTML = +gradus.innerHTML - 10
    zapas.innerHTML = +zapas.innerHTML + 16
}

let wheels = {
    one: "../img/wheel-19.000182ec-removebg-preview.png ",
    two: "../img/wheel-21.a3203d2a-removebg-preview.png"
}

wheel.forEach(btn => {
    btn.onclick = () => {
        let data = btn.getAttribute('data-wheels')
        if (data === 'two') {
            round_bg.forEach(bg => {
                let wheell = btn.getAttribute('data-wheels')
                bg.style.background = `url("${wheels[wheell]}")`
                bg.style.backgroundSize = "contain"
                bg.style.backgroundRepeat = "no-repeat"
                twentyOne.innerHTML = '21'
                price_tesla.innerHTML = "$91, 990"
            });
        } else {
            round_bg.forEach(bg => {
                let wheell = btn.getAttribute('data-wheels')
                bg.style.background = `url("${wheels[wheell]}")`
                bg.style.backgroundSize = "contain"
                bg.style.backgroundRepeat = "no-repeat"
                twentyOne.innerHTML = '19'
                price_tesla.innerHTML = "$89, 990"
            });
        }
    }
});