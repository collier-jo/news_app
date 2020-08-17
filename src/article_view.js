// take in the web title and put it into html 

class HeadlineView{
  constructor(headlineList){
    this.list = headlineList
    this.id = 0
  }

  convertToHTML(){
    let html = `<center><div class="article-container"><ul>`
    let headlines = this.list.return()

    headlines.forEach((item) => {
      html += `<div class="single-article"><img src="${item.pic}" alt="Article image" class="image"><h2 class="text">${item.title}</h2><p id="summarise_article_${item.id}" class="text"></p><p class="text">Follow this <a href="${item.url}">link</a></span> to find out more.</p></div>`
    });

    html += "</ul></div></center>"

    return html
  }

}

module.exports = HeadlineView;


// img {
//   max-width: 100%;
//   height: auto;
//   width: auto\9; /* ie8 */
// }