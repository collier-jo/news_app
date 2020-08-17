const HeadlineList = require('../article_list_model');

describe("List model", () => {
    

    test("adds headline to array", () => {
        headlineList = new HeadlineList()

        let headline = { title: "Test Headline"}

        headlineList.add(headline)

        expect(headlineList.list.length).toBe(1)
        expect(headlineList.list).toEqual([{title: 'Test Headline'}])
    })

    test("returns headline list", () => {

        headlineList = new HeadlineList()
        let headline = { title: "Test Headline" }
        headlineList.add(headline)
        let headline2 = { title: "Test 2 Headline"}
        headlineList.add(headline2)


        expect(headlineList.return()).toEqual([{title: 'Test Headline'}, {title: "Test 2 Headline"}])

    })

})