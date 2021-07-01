class ScoreRepository {
    constructor(storage) {
        this.scoreList = storage.get('SCORE_LIST') || [];
        this.storage = storage;
        this.numberListItems = 5;
    };

    add(score){
        this.scoreList.push(score);
        this.onChange();
    };

    refresh(){
        this.scoreList = this.scoreList.map( (item) => {
            item.isActual = false;
            return item;
        })
    };

    getAll(){
        return this.scoreList;
    }

    onChange(){
        this.scoreList.sort( (a,b) => a.time - b.time);
        if(this.scoreList.length > this.numberListItems){
            this.scoreList.pop();
        }
        this.storage.set('SCORE_LIST', this.scoreList);
    }


}

export default ScoreRepository;