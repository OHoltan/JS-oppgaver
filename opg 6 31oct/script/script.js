// opgave 1

let poteter = ["søt", "mandel", "Nypoteter"]

// for -- en for loop vill fortsette til conditionen blir false 

for (let i = 0; i < poteter.length; i++) {
    console.log(`det er ${i} antall poteter.`);
};

// Do...while -- en Do...while loop vill fortsette til conditionen blir false. den vill også kjøres en gang før condition er lest

let b = 0;

do {
    b += 1;
    console.log(b)
} while (b < 3);

// While - en while loop vil kjøre så lenge condtion er true

let dogs = 0;

while (dogs < 5) {
    dogs++;
    console.log(`dogs ${dogs}`)
}

// break -- en brake uten en lable aslutter en while, do-while, for og switch og hopper til neste statment

for (let i = 0; i < poteter.length; i++) {
    console.log(`det er ${i} antall poteter.`);
    break;
};

// continue -- continue kan bli brukt til å resarte while, do-while, for og lable statments


// oppgave 2

const navneliste= ['Geir','Espen','Ellen','Erik','Lars','Gunnar','Oda','Nina','Tine','Henrik','Agnethe'];

navneliste.forEach(element => {
    console.log(`navn er ${element} og har ${element.length} antal bokstaver i navnet`);

});

// for (let index = 0; index < navneliste.length; index++) {
//     console.log(`navn er ${navneliste[index]} og har ${navneliste[index].length} antal bokstaver i navnet`);
    
// };

// valgte foreach loop siden bruker jeg den bare som en liten funksjon

// oppgave 3


for (let index = navneliste.length - 1; index >= 0; index--) {
    console.log(`navn er ${navneliste[index]} og har ${navneliste[index].length} antal bokstaver i navnet`);
    
};

// oppgave 4

function reduceToOddNumber(number) {
    //Den neste linjen sjekker om argumentet som blirbrukt i funksjonen
    //Faktisk er et tall.
    if(typeof(number) =='number'){
        number /= 2;
        do {
            number /= 2
        } while (number % 2 == 0);
        console.log(number)
        //Skriv en løkke her
    };
};

reduceToOddNumber(100);
reduceToOddNumber(101);
reduceToOddNumber(121);
reduceToOddNumber(132);

// oppgave 5

// while og each of