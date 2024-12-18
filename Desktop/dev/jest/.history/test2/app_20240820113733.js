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

const containModération = ['nul', 'nuls', 'idiot', 'idiots', 'imbécile', 'imbéciles'];

function containModération(message){
    // let MessageClean = Modération.forEach (mot) => {
    //     const regex = new RegExp(`\\b${mot}\\b`, 'gi');
    //     MessageClean = MessageClean.replace(regex,"*****" );
    // }
    let MessageClean = message.split('');
    for (let i = 0 ; i < MessageClean.lenght; i++) {
        if (containModération.includes(MessageClean)){
            MessageClean[i]= '****'
        }
    }
}
return Modération.join