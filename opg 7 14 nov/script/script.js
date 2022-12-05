// oppgave 1
{
    const i = 10;
    console.log(`i = ${i}`);
}
// utskriften blir "i =10" med at variblen blir laget og blir i Scopet

// Oppgave 2

const x = 10;
{
    console.log(`i = ${x}`);
}

// utskriften blir fortsat "i =10" siden Variablen er over scopet

// oppgave 3

// {
//     const y = 10;
// }
// console.log(`y = ${y}`);

// "error y is undefined" pga at y er under en en scope, og dermed kan ikke hoppe ut

//Oppgave 4
let z;
{
    z = 10;
    //utskrift a)
    console.log(`z = ${z}`);
}
//utskrift b)
console.log(`z = ${z}`)

//  utskrift a og b blir "z = 10" med at z blir ikke definert på nytt

//Oppgave 5
let a;
fubar();
console.log(`a = ${a}`);
function fubar() {
    a=2;
}

// coden vill først lage "a" så gjør den funksonen "fubar"
// som gjør verdien til "a" til 2 
// og deretter hopper tilbake og gjør console.log
// a = 2

//Oppgave 6
let b = 10;

add(b,5);
console.log(b);

function add(c,d){
    let result = c + d;
    console.log(result);
}
// B = 15 
//  Koden kjører til add() så hopper den ned og kjører funksjonen før den deretter går tilbake å skriver i consollen

//Oppgave 7
console.log(`e = ${e}`);
var e = 2;

// e = undefined
//  hvis man hadde brukt let/const hadde man fått en error at man ikke kan se "e" før initialisjonen