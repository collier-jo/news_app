class HeadlineList {
    constructor(){
        this.list = []
    }
    add(headline){
        this.list.push(headline)
    }

    return(){
        return this.list
    }
}

module.exports = HeadlineList;