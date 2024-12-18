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
    // let MessageClean = forbiddenWords.forEach (mot) => {
    //     const regex = new RegExp(`\\b${mot}\\b`, 'gi');
    //     MessageClean = MessageClean.replace(regex,"*****" );
    // }
    let MessageClean = message.<div class="btn-group">
      <button type="button" class="btn btn-secondary">Split dropdown</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item disabled" href="#">Disabled action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
}
return forbiddenWords