const reservas = document.querySelectorAll(`.reservas__opcion`)
const blocks = document.querySelectorAll(`.reservas__opcionBlocked`)
const botones = document.querySelectorAll(`.reservas__button-reser`)
const calendar = document.querySelector(`.reservas__buttonCalendar`)


// Calculo el día de hoy con javascript para 
// establecerla como día mínimo de reserva y día por defecto

let today = new Date().toISOString().slice(0, 10)
calendar.value = today
calendar.min = today


//Para cada botón de reserva i de un bloque de horario
//Desactiva el bloque de horario i
// Activa el bloque bloqueado i correspondiente
botones.forEach((_,index)=>{
    botones[index].addEventListener(`click`,()=>{

            reservas[index].classList.add(`disable`)
            blocks[index].classList.remove(`disable`)
    })
})