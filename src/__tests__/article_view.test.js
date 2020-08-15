const HeadlineView = require('../article_view');
const response = require("../response")

jest.mock("../response")

describe("Headline View", () => {
    test("Returns a headline into HTML", () => {
    
        let headlineView = new HeadlineView(response)

        console.log(response.readOne())

        expect(headlineView.convertToHTML()).toEqual("<h1>Mock webTitle</h1>")
        // to have been called 
        // to have been called 1 time 
    })
})

