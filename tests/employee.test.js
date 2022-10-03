const Employee = require('../employee')

describe('Employee class', () => {
    it("should return employee's name", () => {
        const matt = new Employee('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com')

        const result = matt.getName()

        expect(result).toBe('Matt Jusuf')
    });
    it("should return employee's ID", () => {
        const matt = new Employee('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com')

        const result = matt.getId()

        expect(result).toBe(5)
    });
    it("should return employee's email", () => {
        const matt = new Employee('Matt Jusuf', 5, 'matthewd.jusuf@gmail.com')

        const result = matt.getEmail()

        expect(result).toBe('matthewd.jusuf@gmail.com')
    });
})