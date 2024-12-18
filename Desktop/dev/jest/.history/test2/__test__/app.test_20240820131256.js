const app = require("../app.js");

// describe("is Palindrom", () => {
//     it('should be a palindrom', () => {
//         expect(app.isPalindrom('radar')).toEqual(true);
//     });
// });
//     it('should not be a palindrom', () => {
//         expect(app.isPalindrom('rada')).toEqual(false);
//     });

describe('Modération', () => {
    // Savoir si un dialogue contient des mots interdits
    it('contient des mots interdits', () =>{
        expect(app.containForbiddenWords('vous êtes des nuls')).toEqual(****);
    });
});