const Intern = require('../lib/intern')


describe('Engineer class', () => {
    it("should return intern's name", () => {
        const matt = new Intern('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'UTS')

        const result = matt.getName()

        expect(result).toBe('Matt Jusuf')
    });
    it("should return intern's id", () => {
        const matt = new Intern('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'UTS')

        const result = matt.getId()

        expect(result).toBe(5)
    });
    it("should return intern's email", () => {
        const matt = new Intern('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'UTS')

        const result = matt.getEmail()

        expect(result).toBe('matthewd.jusuf@gmail.com')
    });
    it("should return intern's GitHub's username", () => {
        const matt = new Intern('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', 'UTS')

        const result = matt.getSchool()

        expect(result).toBe('UTS')
    });
})