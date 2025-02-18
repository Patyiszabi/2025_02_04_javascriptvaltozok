let nev = prompt('Név:');
console.log(`Helló ${nev}`);

let elsooldal = prompt(`Első oldal:`);
let masodikoldal = prompt(`Második oldal:`);

let kerulet = parseInt(elsooldal) * 2 + parseInt(masodikoldal) * 2;
let terulet = parseInt(elsooldal) * parseInt(masodikoldal);

console.log(`A terület: ${terulet}. A kerület: ${kerulet}`);

let sugar = prompt(`Sugár:`);
let kerulet2 = 2 * sugar * Math.PI;
let terulet2 = sugar * sugar * Math.PI;