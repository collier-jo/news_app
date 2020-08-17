const response = require("../response")


jest.mock("../response")

describe("Headline", () => {
    test("Return the title", () => {

        var headline = new HeadlineModel(response)

        expect(headline.readOne()).toEqual("Mock webTitle")
    })
})