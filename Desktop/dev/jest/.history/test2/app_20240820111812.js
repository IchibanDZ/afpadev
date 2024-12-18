// function isPalindrom (w) {
    //  w = w.toLowerCase();
    //  int start = 0;
    //  int end = word.lenght() -1;
//     let SousChainesWord = w.split("");
//     let ReverseWord = SousChainesWord.reverse();
//     let JoinWord = ReverseWord.join("");

//     return w === JoinWord
// }

// module.exports = {isPalindrom}

const forbiddenWords = ['nul', 'nuls', 'idiot', 'idiots', 'imbécile', 'imbéciles'];

function containForbiddenWords(message){
    let MessageClean = forbiddenWords.forEach (mot) => {
        const regex = new RegExp(`\\b${mot}\\b`, 'gi');
        MessageClean = MessageClean.replace
    }


}