const spanish = {
    "merry": "Feliz",
    "christmas": "Navidad",
    "and": "y",
    "happy": "prospero",
    "new": "nuevo",
    "year": "ano"
};

const german = {
    "merry": "Frohe",
    "christmas": "Weihnachten",
    "and": "und ein",
    "happy": "gluckliches",
    "new": "Neues",
    "year": "Jahr"
};

const french = {
    "merry": "joyeux",
    "christmas": "Noel",
    "and": "et",
    "happy": "bonne",
    "new": "nouvel",
    "year": "An"
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
      
const spanishTranslate = () => {
    const inputValue = document.getElementById('inputBox').value;
    const inputWords = inputValue.split(" ");
    // for (let i = 0; i < inputWords.length; i++){
    //     spanish[inputWords[i]];
    // }
    const spanishTranslatedString = spanishStringBuilder (inputWords);
    printToDom(spanishTranslatedString, 'returnText');
}

const spanishStringBuilder  = (inputWords) => {
    let newString = '';
    for(let i = 0; i < inputWords.length; i++) {
        let spanishWord = spanish[inputWords[i]];
        newString += `<p>${spanishWord}</p>`
    };
    return newString;
}
const spanishButton = document.getElementById('spanishButton');
    spanishButton.addEventListener("click", spanishTranslate);