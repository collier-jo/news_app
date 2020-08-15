const HeadlineView = require('../article_view');

describe("Headline View", () => {
    test("ReadOne is called", () => {

        let headlineModel = {
            readOne: function(){
                return "Hello"
            }
        }
        const spy = jest.spyOn(headlineModel, "readOne")

        let headlineView = new HeadlineView(headlineModel)
        headlineView.convertToHTML()

        expect(headlineModel.readOne).toHaveBeenCalled()
    });

    test("Webtitle is put into HTML tags", () => {

        let headlineModel = {
            readOne: function(){
                return "Hello"
            }
        }
        const spy = jest.spyOn(headlineModel, "readOne").mockImplementation(() => "Mock Title");
        
        let headlineView = new HeadlineView(headlineModel)

        expect(headlineView.convertToHTML()).toEqual("<h1>Mock Title</h1>")
        expect(headlineModel.readOne).toHaveBeenCalled()
    });
})
