const iniciarSesion = document.querySelector(`.header__button`)
const iniciarSesionDentro = document.querySelector(`.header__input-ini`)
const perfilIcon = document.querySelector(`.header__button-perfil`)
const back = document.querySelector(`.header__back`)
const loginMenu = document.querySelector(`.header__login`)
const closeMenu = document.querySelector(`.header__loginClose`)


const voteButton = document.querySelectorAll(`.vote__button`)
const votePop = document.querySelector(`.vote__popup`)
const botonesYesNo = document.querySelectorAll(`.vote__button-yes-no`)

//Cuando pulsas cualquier botón de votación abre el pop up informativo de la votación
voteButton.forEach((_,index)=>{
    voteButton[index].addEventListener(`click`,()=>{
        votePop.classList.add(`isVisible`)
    })
})

//Cuando pulsas sí o no en la votación cierra el pop up (Da igual cual se pulse porque no hay un backend para registrarlo)
botonesYesNo.forEach((_,index)=>{
    botonesYesNo[index].addEventListener(`click`,()=>{

        votePop.classList.remove(`isVisible`)
    })
})