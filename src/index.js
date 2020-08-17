window.onload = () => {

    var title = document.getElementById("header")
    title.innerHTML = "Gay Guardian"

    fetch("https://content.guardianapis.com/search?q=lgbt&api-key=4665f0d4-a8d7-4cb9-b075-047eda99341a")
    .then(response => response.json())
    .then((data) => {
        console.log(data.response.results[0].webTitle)
        
        let headlineList = new HeadlineList()
       
        let headlineView = new HeadlineView(headlineList)
        
        let headlineController = new HeadlineController(headlineView)

        for(var i = 0; i < data.response.results.length; i ++){
            let headlineModel = new HeadlineModel(data.response.results[i])

            headlineList.add(headlineModel)
        }
        
        return headlineController.addToPage()
    })


}

