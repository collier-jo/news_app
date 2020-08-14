window.onload = () => {
    // title("News App")

    var title = document.getElementById("header")
    title.innerHTML = "Gay Guardian"

}




class Article {
    constructor(data){
        this.title = data.webTitle
    }
}


module.exports = Article;


/// create node objects 
// create a new article 
