const registrate = document.querySelectorAll(`.header__reg-a`)
const registerBox = document.querySelector(`.header__register`) 
const loginBox = document.querySelector(`.header__login`) 

console.log(registrate)

//Funcion para abrir el formulario de registro
function registerActive(){
    loginBox.classList.remove(`open`)
    registerBox.classList.add(`open`)
}
//Funcion para abrir el formulario de inicio de sesion

function loginActive(){
    loginBox.classList.add(`open`)
    registerBox.classList.remove(`open`)
}

//Hay dos enlaces de registro e inicio de sesion
//El primero activa el registro
//EL segiundo activa el inicio de sesion
function registerHandler (index){
    if (index == 0){
        registerActive()
    } else{
        loginActive()
    }
}
//Para cada uno de esos botones, cuando los pulses, hace una función o la otra dependiendo del index que tengan
if (registrate){
    registrate.forEach((_,index)=>{
        registrate[index].addEventListener(`click`,()=>{
            registerHandler(index)
        })
    })
}