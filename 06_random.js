console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10)+100)
console.log(Math.floor(Math.random()*1000)+2000)

function dobas_mutat()
{
    let dobas = Math.ceil(Math.random()*6)
    document.getElementById("dobas").innerHTML = dobas
}

function lotto()
{
    let szam = (Math.ceil(Math.random()*100))
    document.getElementById("szam").innerHTML = szam
}
