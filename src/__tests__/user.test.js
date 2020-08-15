const user = require("../response")

jest.mock("../response")

test("Testing mock users", () => {
    expect(user.webTitle).toBe("Mock webTitle")
})