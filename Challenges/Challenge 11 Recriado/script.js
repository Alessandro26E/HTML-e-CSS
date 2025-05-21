const cardNameInput = document.getElementById("Cardholderinput")
const cardNumberInput = document.getElementById("cardnumberInput")
const mesInput = document.getElementById("mesinput")
const anoInput = document.getElementById("anoinput")
const cvcInput = document.getElementById("cvcinput")

const cvctext = document.getElementById("cvctext")
const anotext = document.getElementById("anotext")
const mestext = document.getElementById("mestext")
const cardName = document.getElementById("card-name")
const cardNumber = document.getElementById("cardnumber")

const ConfirmBTN = document.getElementById("confirmBtn")

/*/^[a-zA-Z0-9]$/*/

cardNumberInput.addEventListener("keyup", function(event) {
    var tecla = event.key;
    var numero = /^[0-9]$/.test(tecla);


    if (numero == true) {
        cardNumber.textContent.replace(/(.{4})/g, "$1 ").trim();
        cardNumber.textContent = cardNumberInput.value.replace(/(.{4})/g, "$1 ").trim();
    }
})

cardNameInput.addEventListener("keyup", function(event) {
    var tecla = event.key;
    var letra =  /^[a-zA-Z]$/.test(tecla)

    if (letra == true) {
        cardName.innerText = cardNameInput.value
    }
});


mesInput.addEventListener("keyup", function(event) {
    var tecla = event.key
    var numero = /^[0-9]$/.test(tecla)

    if (numero == true) {
        mestext.innerText = mesInput.value
    }
})


anoInput.addEventListener("keyup", function(event) {
    var tecla = event.key
    var numero = /^[0-9]$/.test(tecla)

    if (numero == true) {
        anotext.innerText = anoInput.value
    }
})

cvcInput;addEventListener("keyup", function(event) {
    var tecla = event.key
    var numero = /^[0-9]$/.test(tecla)

    if (numero == true) {
        cvctext.innerText = cvcInput.value
    }
})