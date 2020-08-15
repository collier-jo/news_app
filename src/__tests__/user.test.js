const user = require("../user")

jest.mock("../user")

test("Testing mock users", () => {
    expect(user.name).toBe("Mock User")
})