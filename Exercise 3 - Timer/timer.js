console.log("Exercise 3 - Timer");
const reduceBtn = document.getElementById("subtract")
const addBtn = document.getElementById("add")

const secondsHolder = document.getElementById("seconds")

const resetBtn = document.getElementById("reset")
const startBtn = document.getElementById("start")

const changeColors = () => {
    reduceBtn.classList.toggle("active")
    addBtn.classList.toggle("active")
    resetBtn.classList.toggle("active");
}

let timer;

reduceBtn.addEventListener("click", () => {
    if (timer) return;

    let seconds = +secondsHolder.textContent.slice(0, secondsHolder.textContent.length - 1)
    if (seconds <= 0) return;

    secondsHolder.textContent = `${seconds -= 1}s`
})

addBtn.addEventListener("click", () => {
    if (timer) return;

    let seconds = +secondsHolder.textContent.slice(0, secondsHolder.textContent.length - 1)

    secondsHolder.textContent = `${seconds += 1}s`
})

resetBtn.addEventListener("click", () => {
    if (timer) return;

    secondsHolder.textContent = '0s'
})

startBtn.addEventListener("click", () => {
    let seconds = +secondsHolder.textContent.slice(0, secondsHolder.textContent.length - 1)
    if (seconds <= 0) return;

    if (timer) {
        startBtn.textContent = "START"
        clearInterval(timer)
        changeColors()
        return timer = null
    }

    changeColors()
    startBtn.textContent = "STOP"
    timer = setInterval(() => {
        seconds--
        secondsHolder.textContent = `${seconds}s`
        if (seconds == 0) {
            clearInterval(timer)
            startBtn.textContent = "START"
            timer = null;
            changeColors()
        }
    }, 1000);
})