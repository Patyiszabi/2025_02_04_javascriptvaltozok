function dobas_mutat() {
    let dobas = Math.ceil(Math.random() * 6);
    document.getElementById('dobas').innerHTML = 'A dobásod: '+ dobas;
}

function lotto() {
    let szamok = [];
    for (let i = 0; i < 5; i++)
    {
        szamok.push(Math.ceil(Math.random() * 90));
    }

    document.getElementById('lotto').innerHTML = 'A lottó eredményei: ' + szamok.join(', ');
}