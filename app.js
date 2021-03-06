let button = document.getElementById("send")
button.addEventListener("click", function () {
    // let card = document.getElementById("card")

    // if (card.value == "") {                   
    //     card.style.backgroundColor = "red"
    // } else {
    //     console.log(card.value);
    // }

   

    // if (cvc.value == "") {
    //     cvc.style.backgroundColor = "red"
    // } else {
    //     console.log(cvc.value);
    // }
    

    // if (amount.value == "") {
    //     amount.style.backgroundColor = "red"
    // } else {
    //     console.log(amount.value);
    // }
    

    // if (name1.value == "") {
    //     name1.style.backgroundColor = "red"
    // } else {
    //     console.log(name1.value);
    // }
    
    // if (name2.value == "") {
    //     name2.style.backgroundColor = "red"
    // } else {
    //     console.log(name2.value);
    // }
   

    // if (city.value == "") {
    //     city.style.backgroundColor = "red"
    // } else {
    //     console.log(city.value);
    // }
    

    // if (state.value == "") {
    //     state.style.backgroundColor = "red"
    // } else {
    //     console.log(state.value);
    // }
    

    // if (postal.value == "") {
    //     postal.style.backgroundColor = "red"
    // } else {
    //     console.log(postal.value);
    // }
    

        

    // if (tipo.value == "") {
    //     tipo.style.backgroundColor = "red"
    // } else {
    //     console.log(tipo.value);
    // } 
    

    // if (mensaje.value == "") {
    //     mensaje.style.backgroundColor = "red"
    // } else {
    //     console.log(mensaje.value);
    // }
    

enviarformulario()
// console.log(card(), cvc(), amount() ,name1(), name2(),city(),postal(),mensaje(),"david estuvo aca")


    
})
//linea1
    let card2 = document.getElementById("card")
     let cvc2 = document.getElementById("cvc")
     let amount = document.getElementById("amount")
     let name1 = document.getElementById("name1")
     let name2 = document.getElementById("name2")
     let city = document.getElementById("city")
     let state = document.getElementById("state")
     let postal = document.getElementById("postal")
     let tipo = document.getElementById("tipo1")
     let mensaje = document.getElementById("message")


     
function card() {
    
    if(card2.value==""||card2.value==undefined){
        // card.style.backgroundColor = "red"
        return false} else {return true}
     
}
card()
console.log(card());

function cvc() {
    
    if(cvc2.value==""||cvc2.value==undefined){return false} else {return true}
     
}
cvc()
console.log(cvc());

function amount3() {
    
    if(amount.value==""||amount.value==undefined){return false} else {return true}
     
}
amount3()
console.log(amount3());

//linea2
function name13() {
    
    if(name1.value==""||name1.value==undefined){return false} else {return true}
     
}
name13()
console.log(name13());

function name23() {
    
    if(name2.value==""||name2.value==undefined){return false} else {return true}
     
}
name23()
console.log(name23());
//linea3
function city3() {
    
    if(city.value==""||city.value==undefined){return false} else {return true}
     
}
city3()
console.log(city3());

function postal3() {
    
    if(postal.value==""||postal.value==undefined){return false} else {return true}
     
}
postal3()
console.log(postal3());
//linea4
function mensaje3() {
    
    if(mensaje.value==""||mensaje.value==undefined){return false} else {return true}
     
}
mensaje3()
console.log(mensaje3());


function validarboton(){
        let pelotas = document.getElementsByClassName("tipo1")
    for (var i = 0; i < 5; i++) {
 console.log(pelotas[i].checked)
}

    // if (entradas.item(i).name=="boton"&&entradas.item(i).checked==true){
    // console.log(entradas.item(i).value,"Esta marcado")
    // estmarcado++;
    

}


function validarselect(){
    let sel = document.getElementById("selectid")
    
    if (sel.value!="Pick a state"){return true} else {return false}
}




function enviarformulario(){
    if (card()==false || cvc()==false || amount3()==false || name13()==false ||name23()==false || city3()==false ||postal3()==false ||mensaje3()==false||validarselect()==false){
        document.getElementById("alert").style.display="block"
       
     
        
        // return "el formulario ha sido enviado exitosamente"
    }else{console.log('The form has been sent',card(),card.value)}
}


// button.addEventListener()