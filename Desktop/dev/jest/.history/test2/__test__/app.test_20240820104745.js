const app = require("../app.js");

describe("is Palindrom", () => {
    it('should be a palindrom', () => {
        expect(app.isPalindrom('radar')).toEqual(true);
    });
});
    it('should not be a palindrom', () => {
        expect(app.isPalindrom('rada')).toEqual(false);
    });

