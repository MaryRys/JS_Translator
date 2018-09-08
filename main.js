const spanish = {
    merry: Feliz
    christmas: Navidad
    and: y
    happy: prospero
    new: nuevo
    year: ano
}

const german = {
    merry: Frohe
    christmas: Weihnachten
    and: und ein
    happy: gluckliches
    new: Neues
    year: Jahr
}

const french = {
    merry: joyeux
    christmas: Noel
    and: et
    happy: bonne
    new: nouvel
    year: An
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};