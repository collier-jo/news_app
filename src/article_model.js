// the model needs to take a json response :
// return a title 

class HeadlineModel {
  constructor(data){
    this.title = data.webTitle 
    this.url = data.webUrl
  }

  readOne(){
    var headline = {title: this.title, url: this.url}
    return headline
  }
}

module.exports = HeadlineModel;