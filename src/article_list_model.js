class HeadlineList {
    constructor(){
        this.list = []
        this.id = 0
    }
    add(headline){
        headline.id = this.id
        this.list.push(headline)
        this.id ++ 
    }

    return(){
        return this.list
    }
}

module.exports = HeadlineList;