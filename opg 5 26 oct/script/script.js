console.log("oppgave 1");
// oppgave 1

function typecheking(parameter){
    if (typeof parameter === "string") {
        console.log("STRING STRING STRING!");
    } else {
        console.log("Dette er ikke en String i det hele tatt");
    }
};

typecheking(1);
typecheking('1');
typecheking('Navn');

// funksjonen sjekker om parameter er en string med å bruke en If else statment
// ved 1 som parameter er parameter av typen number, som da vil bli sjoekket i typeof om det er en string
// ved "1" og "navn" kommer typeof til å se det samme og gi true

console.log("oppgave 2");
// oppgave 2 


function multipleTypeChecking(par1, par2) {
    if (typeof par1 === typeof par2) {
        console.log("Argumentene du brukte er av samme type!");
    } else {
        console.log("Argumentene du brukteer IKKE av samme type!");
    }
};


multipleTypeChecking('en', 1);
multipleTypeChecking(1,1);
multipleTypeChecking(2,3);
multipleTypeChecking('2', '3');
multipleTypeChecking(2, '3');

// fuksjonen sjekker om begge paramaterne er samme, ved å først se vilke typer de er, for å så så sjekke om de er like.

console.log("oppgave 3");
// oppgave 3

function littAvHvertSjekker(par1, par2, par3) {
    if (typeof par1 === typeof par2 || typeof par3 == "number" && par3 > 5) {
        console.log("Det er toparametere av samme type her, ELLER så er det tall som er høyere enn FEM!!!");
    } else {
        console.log("FAIL!");
    }
};

littAvHvertSjekker("potet", 2, 6);
littAvHvertSjekker("potet", 2, "5");
littAvHvertSjekker("potet", "2", "6");


console.log("oppgave 4");
// oppgave 4

function arraysjekker(maybeArray) {
if (Array.isArray(maybeArray)) {
    
    let amountofnum = 0;
    let amountofstring = 0;

    maybeArray.forEach(element => {
        
        if (typeof element == "number") {
            amountofnum++
        } else if (typeof element == "string") {
            amountofstring++;
        };
        
    });
    console.log(`arrayen innehold ${amountofnum} tall og ${amountofstring} ord!`)
    };
};    


arraysjekker(["i", 2, 3, 4, 5])
arraysjekker(["a", "man", "1", 1, 5])
arraysjekker(["poterer", 4, "potere", 4, "kdasjd", true])
