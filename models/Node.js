(() => {
  class Node {
    constructor(){
      this._question = null;
      this._options = new Map;
      this._from = null;
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

    get from(){
      return this._from
    }

    set from(value){
      this._from = value
    }
  }
  Polymer.Node = Node;
})();
