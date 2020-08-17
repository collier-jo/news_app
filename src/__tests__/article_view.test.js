const HeadlineView = require('../article_view');

describe("Headline View", () => {
    test("ReadOne is called", () => {

        let headlineList = {
            return: function(){
                var testArray = []
                return testArray
            }
        }
        const spy = jest.spyOn(headlineList, "return")

        let headlineView = new HeadlineView(headlineList)
        headlineView.convertToHTML()

        expect(headlineList.return).toHaveBeenCalled()
    });

    test("Webtitle is put into HTML tags", () => {

        let headlineList = {
            return: function(){
                var testArray = []
                return testArray
            }
        }
        const spy = jest.spyOn(headlineList, "return").mockImplementation(() => [{title: "Mock Title", url: "Mock URL", id: 0, pic: "Mock PicURL"}]);
        
        let headlineView = new HeadlineView(headlineList)

        expect(headlineView.convertToHTML()).toEqual(`<div><ul><img src="Mock PicURL" alt="Article image" width="100%"><h2>Mock Title</h2><p id="summarise_article_0"></p><p>Follow this <a href="Mock URL">link</a></span> to find out more.</p></ul></div>`)
        expect(headlineList.return).toHaveBeenCalled()
    });
})

