let név = prompt('Név:');
console.log(`Hello, ${név}!`); 

let elsooldal = prompt('Elso oldal:');
let masodikoldal = prompt('Masodik oldal:');
let kerulet = parseInt(elsooldal) + parseInt(masodikoldal + parseInt(elsooldal) + parseInt(masodikoldal));
let terulet = parseInt(elsooldal) * parseInt(masodikoldal);
console.log(`A kerulet: ${kerulet}`);
console.log(`A terulet: ${terulet}`);

let sugar = prompt('Sugar:');
let keruletkor = 2 * parseInt(sugar) * Math.PI;
let teruletkor = Math.PI * parseInt(sugar) * parseInt(sugar);
console.log(`A kerulet: ${keruletkor}`);
console.log(`A terulet: ${teruletkor}`);