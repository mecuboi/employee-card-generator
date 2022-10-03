const Manager = require('../lib/manager')


describe('Engineer class', () => {
    it("should return manager's name", () => {
        const matt = new Manager('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', '021234325')

        const result = matt.getName()

        expect(result).toBe('Matt Jusuf')
    });
    it("should return manager's id", () => {
        const matt = new Manager('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', '021234325')

        const result = matt.getId()

        expect(result).toBe(5)
    });
    it("should return manager's email", () => {
        const matt = new Manager('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', '021234325')

        const result = matt.getEmail()

        expect(result).toBe('matthewd.jusuf@gmail.com')
    });
    it("should return manager's GitHub's username", () => {
        const matt = new Manager('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com', '021234325')

        const result = matt.getOfficeNumber()

        expect(result).toBe('021234325')
    });
})