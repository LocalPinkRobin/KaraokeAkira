const registrate = document.querySelectorAll(`.header__reg-a`)
const registerBox = document.querySelector(`.header__register`) 
const loginBox = document.querySelector(`.header__login`) 

console.log(registrate)

function registerActive(){
    loginBox.classList.remove(`open`)
    registerBox.classList.add(`open`)
}

function loginActive(){
    loginBox.classList.add(`open`)
    registerBox.classList.remove(`open`)
}

function registerHandler (index){
    if (index == 0){
        registerActive()
    } else{
        loginActive()
    }
}

if (registrate){
    registrate.forEach((_,index)=>{
        registrate[index].addEventListener(`click`,()=>{
            registerHandler(index)
        })
    })
}