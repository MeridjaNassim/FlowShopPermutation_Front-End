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
/** Class representing a the parameters that can be passed to branch and bound algorithm. */
export class BranchAndBoundParams extends Params{
    /**
     * Params passed to branch and bound algorithm.
     * @param {number} strategy_id - The id of search strategy to be used.
     * @param {boolean} runParallel - run this algorithm in parallel.
     * @param {boolean} useHeuristique - use a heuristique to find initial sequence.
     * @param {number?} heuristique_id - id of the heuristique to use.
     */
    constructor(strategy_id,runParallel,useHeuristique,heuristique_id){
        super()
        super.add("strategy",strategy_id)
        super.add("parallel",runParallel)
        super.add("use_heuristique",useHeuristique)
        super.add("heuristique_id",heuristique_id)
    }
}
// TODO : Define real params of neh,cds,aco,ga,sa algos
export class NEHParams extends Params{
    /**
     * Params passed to NEH heuristique algorithm.
     * @param {number} strategy_id - The id of search strategy to be used.
     * @param {boolean} runParallel - run this algorithm in parallel.
     * @param {boolean} useHeuristique - use a heuristique to find initial sequence.
     * @param {number?} heuristique_id - id of the heuristique to use.
     */
    constructor(strategy_id,runParallel,useHeuristique,heuristique_id){
        super()
        super.add("strategy",strategy_id)
        super.add("parallel",runParallel)
        super.add("use_heuristique",useHeuristique)
        super.add("heuristique_id",heuristique_id)
    }
}
export class CDSParams extends Params{
    /**
     * Params passed to CDS heuristique algorithm.
     * @param {number} strategy_id - The id of search strategy to be used.
     * @param {boolean} runParallel - run this algorithm in parallel.
     * @param {boolean} useHeuristique - use a heuristique to find initial sequence.
     * @param {number?} heuristique_id - id of the heuristique to use.
     */
    constructor(strategy_id,runParallel,useHeuristique,heuristique_id){
        super()
        super.add("strategy",strategy_id)
        super.add("parallel",runParallel)
        super.add("use_heuristique",useHeuristique)
        super.add("heuristique_id",heuristique_id)
    }
}
export class ACOParams extends Params{
    /**
     * Params passed to Ant Colony optimization metaheuristique algorithm.
     * @param {number} strategy_id - The id of search strategy to be used.
     * @param {boolean} runParallel - run this algorithm in parallel.
     * @param {boolean} useHeuristique - use a heuristique to find initial sequence.
     * @param {number?} heuristique_id - id of the heuristique to use.
     */
    constructor(strategy_id,runParallel,useHeuristique,heuristique_id){
        super()
        super.add("strategy",strategy_id)
        super.add("parallel",runParallel)
        super.add("use_heuristique",useHeuristique)
        super.add("heuristique_id",heuristique_id)
    }
}
export class GAParams extends Params{
    /**
     * Params passed to Genetic metaheuristique algorithm.
     * @param {number} strategy_id - The id of search strategy to be used.
     * @param {boolean} runParallel - run this algorithm in parallel.
     * @param {boolean} useHeuristique - use a heuristique to find initial sequence.
     * @param {number?} heuristique_id - id of the heuristique to use.
     */
    constructor(strategy_id,runParallel,useHeuristique,heuristique_id){
        super()
        super.add("strategy",strategy_id)
        super.add("parallel",runParallel)
        super.add("use_heuristique",useHeuristique)
        super.add("heuristique_id",heuristique_id)
    }
}
export class SAParams extends Params{
    /**
     * Params passed to Simulated Annealing metaheuristique algorithm.
     * @param {number} strategy_id - The id of search strategy to be used.
     * @param {boolean} runParallel - run this algorithm in parallel.
     * @param {boolean} useHeuristique - use a heuristique to find initial sequence.
     * @param {number?} heuristique_id - id of the heuristique to use.
     */
    constructor(strategy_id,runParallel,useHeuristique,heuristique_id){
        super()
        super.add("strategy",strategy_id)
        super.add("parallel",runParallel)
        super.add("use_heuristique",useHeuristique)
        super.add("heuristique_id",heuristique_id)
    }
}