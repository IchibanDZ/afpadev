const app = require("../app.js");

describe("is Palindrom", () => {
    it('should be a palindrom', () => {
        expect(app.isPalindrom('kayak')).toEqual('true');
    });
});


