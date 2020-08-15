const HeadlineView = require('../article_view');
const HeadlineModel = require('../article_model');
const response = require("../response")

jest.mock("../response")



describe("Headline View", () => {
    test("ReadOne is called", () => {

        let testing = new HeadlineModel(response)

        console.log(testing.readOne())
        const spy = jest.spyOn(testing, "readOne")

        let headlineView = new HeadlineView(testing)
        headlineView.convertToHTML()

        expect(testing.readOne).toHaveBeenCalled()
    });
})

// test('plays video', () => {
//     const spy = jest.spyOn(video, 'play');
//     video.play();
  
//     expect(spy).toHaveBeenCalledTimes(1);
//   });