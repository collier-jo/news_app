const HeadlineModel = require('./article_model');

describe("Headline", () => {
    test("Return the title", () => {

        let testResponse = {
            webTitle: "This is a test"
        }

        var headline = new HeadlineModel(testResponse)
        expect(headline.readOne()).toEqual("This is a test")
    })
})