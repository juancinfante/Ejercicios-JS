let tabla = ["","","","","","","","",""]
localStorage.setItem("tabla",JSON.stringify(tabla))
localStorage.setItem("turno",true)
let tablaHTML = document.getElementById('tabla');

function renderizarTabla(){
    tablaHTML.innerHTML = "";
    let tabla = JSON.parse(localStorage.getItem("tabla"))
    tabla.forEach((ele,index) =>{
        let a = "";
        if(ele !== null){
            tablaHTML.innerHTML += 
            `<div class="celda" data-index="${index}" onclick="pintarCelda(event)">
                ${ele}
            </div>`
        }else{
            tablaHTML.innerHTML += 
            `<div class="celda" data-index="${index}" onclick="pintarCelda(event)">
                
            </div>`
        }
    })
}

function pintarCelda(e){
    let turno = JSON.parse(localStorage.getItem("turno"))
    let tabla = JSON.parse(localStorage.getItem("tabla"))
    let contador = JSON.parse(localStorage.getItem("contador"))
    if(tabla[e.target.dataset.index] == ""){
        if(turno){
            tabla[e.target.dataset.index] = "X";
            localStorage.setItem("turno",false)
        }else{
            tabla[e.target.dataset.index] = "O";
            localStorage.setItem("turno",true)
        }
        localStorage.setItem("tabla",JSON.stringify(tabla))
        renderizarTabla()
        verificarGanador()
    }
}
function verificarGanador(){
    let tabla = JSON.parse(localStorage.getItem("tabla"))
    let turno = JSON.parse(localStorage.getItem("turno"))

    if(turno){
        turno = "O"
    }else{
        turno = "X"
    }

    // VERIFICA X
    if(tabla[0] == "X" && tabla[1] == "X" && tabla[2] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[3] == "X" && tabla[4] == "X" && tabla[5] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[6] == "X" && tabla[7] == "X" && tabla[8] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
                alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[0] == "X" && tabla[3] == "X" && tabla[6] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
                alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[1] == "X" && tabla[4] == "X" && tabla[7] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
                alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[2] == "X" && tabla[5] == "X" && tabla[8] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
                alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[0] == "X" && tabla[4] == "X" && tabla[8] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
                alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[2] == "X" && tabla[4] == "X" && tabla[6] == "X"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
                alert("GANADOR " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }


    // VERIFICA O
    if(tabla[0] == "O" && tabla[1] == "O" && tabla[2] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[3] == "O" && tabla[4] == "O" && tabla[5] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[6] == "O" && tabla[7] == "O" && tabla[8] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[0] == "O" && tabla[3] == "O" && tabla[6] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[1] == "O" && tabla[4] == "O" && tabla[7] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[2] == "O" && tabla[5] == "O" && tabla[8] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[0] == "O" && tabla[4] == "O" && tabla[8] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
    if(tabla[2] == "O" && tabla[4] == "O" && tabla[6] == "O"){
        tabla = ["","","","","","","","",""]
        localStorage.setItem("tabla",JSON.stringify(tabla))
            setTimeout(() => {
            alert("ganador " + turno)
            renderizarTabla()
            localStorage.setItem("turno",true)
          }, "200");
    }
}

function reiniciar(){
    tabla = ["","","","","","","","",""]
    localStorage.setItem("tabla",JSON.stringify(tabla))
    renderizarTabla()
}

renderizarTabla()