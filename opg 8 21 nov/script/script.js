// oppgave 1 

// hensikten med en funksjon er å ha noe man kan kalle på får å kjøre en bit kode på nytt dettekan inkludere forskjelige parametre


// oppgave 2

// a)
function hi() {
    console.log("hello world");
};


// "funcsion" lager selve funksjonen med "hi" som navnet i () kan man ha parametre etter det er det {} som man putter koden i

// b) 
// et funksjonskall er det som får funksjonen din til å kjøre i () kan du definere parameterne i funksjonen det går etter rekkefølle 

// c)

hi();

// oppgave 3

// et parameter er en gjenstand man kan endre på i en funksjon, på en måte så er det en lokal variabel som blir lagd på nytt ver gang funksjonen kjøres
// når man kaller en funksjon putter man parameterne i samme rekkefølge som i funksjonen.
// man kan ha pre definerte verdier for funksjoner vis man vil ha det


// oppgave 4

function param(par) {
    console.log(par);
    
};

param("Min parameter er ")
param("hund")

// oppgave 5

function multiplepar(param1, param2) {
    console.log(`Jeg fikk to parametere; ${param1} og ${param2}`);
};

multiplepar("hmm", 65)

// oppgave 6

// nøkkelordet "return" gir tillkalelsen av funksjonenen verdien som return gir den
function opg6(par1, par2) {
    return par1 + par2;
}
console.log(opg6(2,7))

// oppgave 7 

function addisjon(par1, par2) {
    if (typeof par1 == "number" && typeof par2 == "number") {
        return par1 + par2;
    }
};

addisjon(1, 2)
addisjon(8, 9)


// Oppgave 8

// man kan bruke "rest" og "spread" synataxene for å fortsette evig hvis man allerede har noen parrametre må den på slutten

function navn(...navnliste) {
    console.log(...navnliste)
}

navn("geir", "ola", "jens", "tord")
