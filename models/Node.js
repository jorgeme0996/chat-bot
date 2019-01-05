class Node {
    constructor(){
        this._question = null;
        this._options = new Map;
        this._isFinal = false;
        this._level = null;
        this._repeats = 0;
        this._from = null;
        this._lambda = (input) =>{
            this._repeats ++;
            return this._options.get(input);
            
        }
    }

    get question(){
        return this._question;
    }

    set question(data){
        this._question = data;
    }

    get options(){
        return this._options
    }

    set options(transactions){
        this._options = transactions
    }

    get isFinal(){
        return this._isFinal
    }

    set isFinal(value){
        this._isFinal = value
    }

    get level(){
        return this._level
    }

    set level(value){
        this._level = value
    }

    get from(){
        return this._from
    }

    set from(value){
        this._from = value
    }
}