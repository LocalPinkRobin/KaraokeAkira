const reservas = document.querySelectorAll(`.reservas__opcion`)
const blocks = document.querySelectorAll(`.reservas__opcionBlocked`)
const botones = document.querySelectorAll(`.reservas__button-reser`)
const calendar = document.querySelector(`.reservas__buttonCalendar`)

let today = new Date().toISOString().slice(0, 10)
calendar.value = today
calendar.min = today



botones.forEach((_,index)=>{
    botones[index].addEventListener(`click`,()=>{

            reservas[index].classList.add(`disable`)
            blocks[index].classList.remove(`disable`)
    })
})