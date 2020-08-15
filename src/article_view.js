// take in the web title and put it into html 

class HeadlineView{
  constructor(headline){
    this.headline = headline 
  }

  convertToHTML(){
    let headline = this.headline.readOne()
    return `<h1>${headline}</h1>`
  }

}
