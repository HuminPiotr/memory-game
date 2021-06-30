
class ScoreRepository {
    constructor(storage) {
        this.scoreList = storage.get('SCORE_LIST') || [];
        this.storage = storage;
        
        // this.scoreList = storage.get('SCORE_LIST');
    };

    add(score){
        this.scoreList.push(score);
        this.onChange()
    };

    getAll(){
        return this.scoreList;
    }

    onChange(){
        console.log(this.scoreList);
        this.scoreList.sort( (a,b) => a.time - b.time);
        if(this.scoreList.length > 5){
            this.scoreList.pop();
        }
        this.storage.set('SCORE_LIST', this.scoreList);
    }

    

}

export default ScoreRepository;