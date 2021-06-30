class ScoreStorage {
    constructor(){
        this.storage = localStorage;
        // this.storage.setItem('SCORE_LIST', []);
    }



    set(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }

    get(key){
        const data = this.storage.getItem(key)
        return JSON.parse(data);
    }
}

export default ScoreStorage;