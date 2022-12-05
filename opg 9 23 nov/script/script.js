// oppgave 1

const hallo = () => console.log("hello world");

hallo();

// oppgave 2

const medpar = par1 => console.log(par1);

medpar("hei jeg er her")

// ved barre en parameter trenger man ikke "()" rundt parameteret

// oppgave 3

const trepar = (par1, par2, par3) => console.log(par1, par2, par3);

trepar("hei", "man", "2")

// oppgave 4

const restpar = (...flereverdier) => {
    console.log(...flereverdier)
};

restpar("hei", "fyr", "hest", 7, "knut")

// oppgave 5

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.