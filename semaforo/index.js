const lights = document.querySelectorAll(".light")


function turnOn(light) {
    let bgColor = window.getComputedStyle(light).backgroundColor;
    if (light.classList.contains("off")) {
        light.classList.remove("off")
        light.classList.add("on")
        light.style.boxShadow = `0 0 30px 1px ${bgColor}`
    }
}


function turnOff(light) {
    if (!light.classList.contains("off")) {
        light.classList.add("off")
        light.classList.remove("on")
        light.style.boxShadow = "none"
    }
}


function blink(light, timeOut) {
    setInterval(() => {
        turnOn(light)
        setTimeout(() => {
            turnOff(light)
        }, timeOut / 2)
    }, timeOut)
}

blink(lights[1], 2000);
