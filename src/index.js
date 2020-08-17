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
            var headlineModel = new HeadlineModel(data.response.results[i])
            headlineList.add(headlineModel)
        }

        // for(var i = 0; i < data.response.results.length; i ++){
        //     var headlines = headlineList.return()
        //     var summary = document.getElementById(`summarise_article_${headlineModel.id}`)
        // }

        var headlines = headlineList.return()

        headlines.forEach((item) => {
                fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${item.url}`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data.sentences[0])
                    var summary = document.getElementById(`summarise_article_${item.id}`)
                    summary.innerHTML = data.sentences[0]
                    

                });
            
        })
        
        headlineController.addToPage()



        

    })
    
    // fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/society/2020/aug/05/lockdown-having-pernicious-impact-on-lgbt-communitys-mental-health")
    // .then(response => response.json())
    // .then((data) => {
    //     console.log(data.sentences[0])
    // });
                   // fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${headlineModel.url}`)
            // .then(response => response.json())
            // .then((data) => {
            //     console.log(data)
            //     let summary = document.getElementById(`summarise_article_${headlineModel.id}`)
            //     console.log(summary)
            //     // summary.innerHTML(data.sentences[0])
            // })


}

