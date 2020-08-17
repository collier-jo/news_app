// take in the web title and put it into html 

class HeadlineView{
  constructor(headlineList){
    this.list = headlineList
    this.id = 0
  }

  convertToHTML(){
    let html = "<div><ul>"
    let headlines = this.list.return()

    headlines.forEach((item) => {
      html += `<li><h2>${item.title}</h2><p>Follow this <a href="${item.url}">link</a></span> to find out more.</p></li>`
    });

    html += "</ul></div>"

    return html
  }

}

module.exports = HeadlineView;


// string += `<li><h3>` + item.title + `</h3></a><p>Follow this <a href="${item.url}l">link</a></span> to find out more.</p></li>`;
