window.onload = () => {
    title("News App")
    

}


(function(exports){
    function title(text){
        title = document.getElementById("header")
        title.innerHTML = text
    }

    exports.title = title
})(this);

