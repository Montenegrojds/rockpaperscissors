const computerPlay = ()=> {
    const numero = Math.floor((Math.random()*3)+1);
    
    if (numero===1){
        return 'rock'
   }
    else if (numero===2) {
        return 'paper'
    }          
    else {
        return 'scissors'
    }    
};

let contadorJugador = 0;
let contadorPc = 0;
const roca = document.querySelector('#roca')
const papel = document.querySelector('#papel')
const tijera = document.querySelector('#tijera')
const puntajePlayer = document.querySelector('#scoreJugador');
const puntajeComputadora = document.querySelector('#scoreComputadora');
const anuncio = document.querySelector('#anuncio');
const anunciofinal = document.querySelector('#anunciofinal')


const juego = (playerSelection)=>{
    
    if (contadorJugador>4 || contadorPc>4){
        contadorJugador=0;
        contadorPc=0;
        puntajePlayer.innerHTML='00';
        console.log(puntajePlayer)
        puntajeComputadora.innerHTML='00';
        anunciofinal.innerHTML = '';
    }


    const seleccionCompu= computerPlay();
    if (playerSelection === seleccionCompu){
        anuncio.innerHTML= 'Empate Prueba otravez'
    }

    else if(playerSelection==='rock'){
        if(seleccionCompu==='scissors'){
            contadorJugador++;
            puntajePlayer.innerHTML=contadorJugador
            anuncio.innerHTML= `You win, ${playerSelection} beats ${seleccionCompu}`;             
            
        }
        
        else{
            contadorPc++;
            puntajeComputadora.innerHTML=contadorPc
            anuncio.innerHTML= `You Lose! ${seleccionCompu} beats ${playerSelection}`    
        } 

    }

    else if(playerSelection==='scissors'){
        if(seleccionCompu==='paper'){
            
            contadorJugador++;
            puntajePlayer.innerHTML=contadorJugador
            anuncio.innerHTML= `You win, ${playerSelection} beats ${seleccionCompu}`;             
        }
        
        else{
            contadorPc++;
            puntajeComputadora.innerHTML=contadorPc
            anuncio.innerHTML= `You Lose! ${seleccionCompu} beats ${playerSelection}`
        } 

    }

    else if(playerSelection==='paper'){
        if(seleccionCompu==='rock'){
            contadorJugador++;
            puntajePlayer.innerHTML=contadorJugador
            anuncio.innerHTML= `You win, ${playerSelection} beats ${seleccionCompu}`;             
        }
        
        else{
            contadorPc++;
            puntajeComputadora.innerHTML=contadorPc
            anuncio.innerHTML= `You Lose! ${seleccionCompu} beats ${playerSelection}`
        } 
    }
    if(contadorPc >4){
        anunciofinal.innerHTML = 'You win the game congratulations '

    }

    if(contadorJugador > 4){
        anunciofinal.innerHTML = 'You lose the game'
    }


}

roca.addEventListener('click',function(e) {
  
    juego('rock'); 
    })

papel.addEventListener('click',function(e) {

    juego('paper');
    
    })

tijera.addEventListener('click',function(e) {
    
    juego('scissors');
        
        })

