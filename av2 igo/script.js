var nome = document.querySelector("#nome")
var nivel = document.querySelector("#nivel")
var forca = document.querySelector("#forca")
var agilidade = document.querySelector("#agilidade")
var armadura = document.querySelector("#armadura")
var poder = document.querySelector("#poder")
var defesa = document.querySelector("#defesa")

let novonome
let label = ""

nome.addEventListener("change",lerNome)
nivel.addEventListener("change",addPrefixo)
nivel.addEventListener("change",addPoder)
forca.addEventListener("change",addPoder)
armadura.addEventListener("change",addDef)
agilidade.addEventListener("change",addDef)

function lerNome() {
    novonome = nome.value
}

function addPrefixo() {
    if(nivel.value < 0)
    {
        label = "[HACKER] "
    }
    else if(nivel.value > 0 && nivel.value <= 5)
    {
        label = "[NOOBASSO] "
    }
    else if(nivel.value > 5 && nivel.value <= 10)
    {
        label = "[DECENTE] "
    }
    else if(nivel.value > 10)
    {
        label = "[SEM VIDA] "
    }
    nome.value = label + novonome
}

function addPoder() {
    let forcadim = forca.value - 10
    let niveldiv = nivel.value / 2
    poder.value = forcadim / 2 + niveldiv
}

function addDef() {
    defesa.value = parseInt(armadura.value) + parseInt(agilidade.value)
}