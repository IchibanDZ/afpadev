const app = require("../app.js");

describe("is Palindrom", () => {
    it('should be a palindrom', () => {
        expect(app.isPalindrom('radar')).toEqual(true);
    });
});

describe("is Palindrom", () => {
    it('should be a palindrom', () => {
        expect(app.isPalindrom('radar')).toEqual(false);
    });
});

