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
    let messageClean = message.split(' ');
    let result = false;
    for (let i = 0 ; i < messageClean.lenght; i++) {
        if (forbiddenWords.includes(MessageClean[i])){
            result = true
        }
    } 
    return result
}

module.exports = {containForbiddenWords, forbiddenWords}