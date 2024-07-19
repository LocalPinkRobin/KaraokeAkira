const cancelar = document.querySelectorAll(`.perfil__cancelReserva`)
const reservas = document.querySelectorAll(`.perfil__reserva`)

//Cuando hacemos click en un boton i de cancelar de una correspondiente reserva i
//La reserva se elimina (Deja de ser mostrada)

cancelar.forEach((_,index)=>{
    cancelar[index].addEventListener(`click`,()=>{

            reservas[index].classList.add(`disable`)
    })
})