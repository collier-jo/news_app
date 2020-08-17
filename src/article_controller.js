class HeadlineController{
    constructor(headlineView){
        this.view = headlineView
    }

    addToPage(){
        var html = this.view.convertToHTML()
        var headline = document.getElementById("headline")
        headline.innerHTML = html
    }
}
