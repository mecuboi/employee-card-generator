const Engineer = require('../lib/engineer')


describe('Engineer class', () => {
    it("should return engineer's name", () => {
        const matt = new Engineer('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'mecuboi')

        const result = matt.getName()

        expect(result).toBe('Matt Jusuf')
    });
    it("should return engineer's id", () => {
        const matt = new Engineer('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'mecuboi')

        const result = matt.getId()

        expect(result).toBe(5)
    });
    it("should return engineer's email", () => {
        const matt = new Engineer('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'mecuboi')

        const result = matt.getEmail()

        expect(result).toBe('matthewd.jusuf@gmail.com')
    });
    it("should return engineer's GitHub's username", () => {
        const matt = new Engineer('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'mecuboi')

        const result = matt.getGitHub()

        expect(result).toBe('mecuboi')
    });
})