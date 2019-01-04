'use strict'

class Node {
    constructor(){
        this._question = null;
        this.transactions = new Map;
        this.isFinal = false;
        this.level = null;
    }

    get question(){
        return this._question;
    }

    set question(data){
        this._question = data;
    }
}