const cancelar = document.querySelectorAll(`.perfil__cancelReserva`)
const reservas = document.querySelectorAll(`.perfil__reserva`)


cancelar.forEach((_,index)=>{
    cancelar[index].addEventListener(`click`,()=>{

            reservas[index].classList.add(`disable`)
    })
})