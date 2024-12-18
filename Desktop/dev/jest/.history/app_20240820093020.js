function isPalindrom (w) {
     w = word.toLowerCase();
    //  int start = 0;
    //  int end = word.lenght() -1;
    let SousChainesWord = w.split("");
    let ReverseWord = SousChainesWord.reverse();
    let JoinWord = ReverseWord.join("");



    return w === JoinWord
}

module.exports = {is}