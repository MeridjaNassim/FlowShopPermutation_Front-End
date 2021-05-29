/**
 * Class representing the added parameters to the execution of a method
 */
export default class Params {

    _map
    constructor(){
        this._map = new Map();
    }

    add(key,value){
        this._map.set(key,value) 
    }
    remove(key){
        return this._map.delete(key)
    }
    clear(){
        this.clear()
    }
    asJSON(){
       return Object.fromEntries(this._map);
    }
}