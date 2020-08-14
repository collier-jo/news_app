// the model needs to take a json response :
// return a title 

class HeadlineModel {
  constructor(data){
    this.title = data.webTitle 
  }

  readOne(){
    return this.title
  }
}

module.exports = HeadlineModel;