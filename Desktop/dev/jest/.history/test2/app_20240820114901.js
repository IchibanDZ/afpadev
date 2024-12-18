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
    // let MessageClean = Modération.forEach (mot) => {
    //     const regex = new RegExp(`\\b${mot}\\b`, 'gi');
    //     MessageClean = MessageClean.replace(regex,"*****" );
    // }
    let MessageClean = message.split(' ');
    let result = false
    for (let i = 0 ; i < MessageClean.lenght; i++) {
        if (forbiddenWords.includes(MessageClean[i])){
            result = true
        }
    } return 
}

module.exports = {containForbiddenWords, forbiddenWords}