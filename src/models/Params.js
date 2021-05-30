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


export class NEHParams extends Params{
   
    /**
     * NEH params
     * @param {boolean} tie_breaking 
     * @param {"SD"|"RD"|"D"|"AV"} order_jobs 
     */
    constructor(tie_breaking=false,order_jobs="RD"){
        super()
        super.add("tie_breaking",tie_breaking)
        super.add("jobs_order",order_jobs)
     }
}
export class CDSParams extends Params{
    /**
     * CDS method Params
     */
    constructor(){
       super()
    }
}
/**
 *  Params for the Ant Colony optimization
 */
export class ACOParams extends Params{
    /**
     * Params for the Ant Colony optimization
     * @param {number} initValue 
     * @param {number} nbAnts 
     * @param {number} rho 
     * @param {number} alpha 
     * @param {number} beta 
     * @param {number} q0 
     * @param {"min" | "max" | "avg"} heuristic_info_strategy 
     * @param {number} nb_rounds 
     * @param {boolean} parallel 
     * @param {number} threads 
     * @param {boolean} local_search 
     * @param {number} local_search_proba 
     * @param {number} local_search_nb_permutation 
     */
    constructor(initValue = 10**(-6), nbAnts = 5, rho = 0.01, alpha = 1, beta = 0.0001, q0 = 0.97, heuristic_info_strategy = 'min', 
    nb_rounds = 2500, parallel = false, threads = 12, local_search = true, local_search_proba = 0.02, local_search_nb_permutation = 3){
        super()
        super.add("initValue",initValue)
        super.add("nbAnts",nbAnts)
        super.add("rho",rho)
        super.add("alpha",alpha)
        super.add("beta",beta)
        super.add("q0",q0)
        super.add("heuristic_info_strategy",heuristic_info_strategy)
        super.add("nb_rounds",nb_rounds)
        super.add("parallel",parallel)
        super.add("threads",threads)
        super.add("local_search",local_search)
        super.add("local_search_proba",local_search_proba)
        super.add("local_search_nb_permutation",local_search_nb_permutation)
    }
}
export class GAParams extends Params{
    /**
     * Params passed to Genetic metaheuristique algorithm.
     * @param {number} popul_size - .
     * @param {number} nb_generations - max generations to create.
     * @param {number} Pc - probability crossover.
     * @param {number?} Pm - probability mutation.
     */
    constructor(popul_size=12,nb_generations=2500,Pc=0.9,Pm=0.06){
        super()
        super.add("popul_size",popul_size)
        super.add("nb_generations",nb_generations)
        super.add("Pc",Pc)
        super.add("Pm",Pm)
    }
}
export class SAParams extends Params{
    /**
     * Params passed to Simulated Annealing metaheuristique algorithm.
     * @param {"NEH" | "CDS"} initial_value - Heuristique to use either "NEH" or "CDS".
     * @param {number} Ti - ?.
     * @param {number} Tf - ?.
     * @param {number} nb_repetitions -max iterations.
     * @param {number} alpha - alpha.
     *
     */
    constructor(initial_value, Ti=2000, Tf = 0.1 ,nb_repetitions=100, alpha = 0.93){
        super()
        super.add("initial_value",initial_value)
        super.add("Ti",Ti)
        super.add("Tf",Tf)
        super.add("nb_repetitions",nb_repetitions)
        super.add("alpha",alpha)
    }
}