
// Manipulando com o Dom
const minutos = document.getElementById("minutes")
const segundos = document.getElementById("seconds")
const milesimo = document.getElementById("millliseconds")
const start = document.getElementById("btn_star")
const pause = document.getElementById("btn_pause")
const continuar = document.getElementById("btn_continue")
const resetar = document.getElementById("btn_reset")

// variáveis 
let interval;
let minutes = 0
let seconds = 0
let milliseconds = 0
let ispaused = false


// Meus Eventos 
start.addEventListener("click", startTimer) 
pause.addEventListener("click", pauseTimer)
continuar.addEventListener("click", resumeTimer)
resetar.addEventListener("click", resetTimer)

// Função Principal
function startTimer(){

  interval = setInterval(() => {

      if(!ispaused) {

          milliseconds += 10
          
          if(milliseconds === 1000) {
            seconds++
            milliseconds = 0

          }

          if(seconds === 60) {
            minutes++
            seconds = 0
          }

          minutos.textContent = formatTimer(minutes)
          segundos.textContent = formatTimer(seconds)
          milesimo.textContent = formatMilliseconds(milliseconds)
      }

  }, 10)


  start.style.display = "none"
  pause.style.display = "block"
}


// Funções Auxiliares
function pauseTimer(){
  ispaused = true
  pause.style.display = "none"
  continuar.style.display = "block"
}

function resumeTimer() {
  ispaused = false
  pause.style.display = "block"
  continuar.style.display = "none"

}

function resetTimer() {
  clearInterval(interval)
  minutes = 0
  seconds = 0
  milliseconds = 0

  minutos.textContent = "00"
  segundos.textContent ="00"
  milesimo.textContent ="000"

  start.style.display = "block"
  pause.style.display = "none"
  continuar.style.display = "none"
 


}

function formatTimer(time){
  return time <10 ? `O ${time}` : time;
}


function formatMilliseconds(time){
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}