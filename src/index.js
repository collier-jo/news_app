window.onload = () => {

    var title = document.getElementById("header")
    title.innerHTML = "Gay Guardian"

    fetch("https://content.guardianapis.com/search?q=lgbt&api-key=4665f0d4-a8d7-4cb9-b075-047eda99341a")
    .then(response => response.json())
    .then((data) => {
        console.log(data.response.results[0].webTitle)
        let healineList = new HealineList()

        //forEach
        let headlineModel = new HeadlineModel(data.response.results[0])
        // healineList.addHealine(headlineModel)



        let headlineView = new HeadlineView(headlineModel)
        let headlineController = new HeadlineController(headlineView)

        return headlineController.addToPage()
    })


}

