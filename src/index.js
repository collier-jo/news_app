window.onload = () => {

    var title = document.getElementById("header")
    title.innerHTML = "Gay Guardian"

    fetch("https://content.guardianapis.com/search?q=lgbt&show-fields=all&api-key=4665f0d4-a8d7-4cb9-b075-047eda99341a")
    .then(response => response.json())
    .then((data) => {
        console.log(data.response.results[0].webTitle)
        
        let headlineList = new HeadlineList()
       
        let headlineView = new HeadlineView(headlineList)
        
        let headlineController = new HeadlineController(headlineView)

        for(var i = 0; i < data.response.results.length; i ++){
            var headlineModel = new HeadlineModel(data.response.results[i])
            headlineList.add(headlineModel)
            console.log("0")
            console.log(data.response.results[i].fields.thumbnail)
        }

        var headlines = headlineList.return()

        headlines.forEach((item) => {
            console.log("1")
            fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${item.url}`)
            .then(response => response.json())
            .then((data) => {
                console.log("2")
                var summary = document.getElementById(`summarise_article_${item.id}`)
                summary.innerHTML = data.sentences[0]
            });
        })

        headlineController.addToPage()

        // var headlines2 = headlineList.return()

        // headlines2.forEach((item) => {
        //     console.log("3")
        //     var image = document.getElementById(`image_article_${item.id}`)
        //     console.log(image)

        //     image.setAttribute('src', `${item.url}#img-1`)
            
        // })
    })




    
    



}

