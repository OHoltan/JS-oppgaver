// opg 1 
// A // En array er en hub for å lagre data
// B // en array i JS kan lagre forkjelige typer data

// opg 2
// A //
let dogs = [];
let and = ["donald", "ole", "dole", "doffen", "skrue mc duck", "dolly", "petter smart", "anton", "Klodrik", "Della" ];
console.log(and[2], and[5], and[8]);

// opg 3
// A // index er possisjonen av elementir i en array
// B // Første possisjonen i en index er "0"
// C // Siste possisjonen i en index kan bli fått med "-1" eller "lastindexOF"
// D // "(array.length)" er antallet med elementer i et array
// E // lengden og siste index i et array er samme nummer

// opg 4
// A // typeof vil returnere "object"
// B // man kan bruke "Array.isArray()" for å finne ut om en variabel eller en konstant er en variabel
// C //
let check = ["dogs"]
let check2 = 2
let result = Array.isArray(check)

//console.log(result) 

if (result == true) {
    console.log("Argumentet er en array")
} else {
    console.log("Argumentet er ikke en array")
}