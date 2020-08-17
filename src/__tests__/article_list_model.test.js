const HeadlineList = require('../article_list_model');

describe("List model", () => {
    

    test("adds headline to array", () => {
        headlineList = new HeadlineList()

        let headline = { title: "Test Headline"}

        headlineList.add(headline)

        expect(headlineList.list.length).toBe(1)
        expect(headlineList.list).toEqual([{title: 'Test Headline'}])
    })

})