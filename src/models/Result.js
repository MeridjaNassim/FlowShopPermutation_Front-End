/**
 * The results returned from execution on instance
 */
export class RunResult{
    instance_id
    method_id
    execution_time
    makespan
    sequence
    additional_info
    /**
     * The results returned from execution on instance
     * @param {string} instance_id 
     * @param {string} method
     * @param {number} execution_time 
     * @param {number} makespan 
     * @param {number[]} sequence 
     * @param {AdditionalInfo} additional_info 
     */
    constructor (instance_id,method,execution_time,makespan,sequence,additional_info)
    {
        this.instance_id = instance_id
        this.method_id = method
        this.execution_time = execution_time
        this.makespan = makespan
        this.sequence = sequence
        this.additional_info = additional_info
    }
}

class AdditionalInfo {
    _map
    constructor ()
    {
        this._map = new Map();
    }
    /**
     * adds additional info
     * @param {string} key 
     * @param {any} val 
     */
    add(key,val){
        this._map.set(key,val)
    }
    /**
     * Gets additional info
     * @param {string} key 
     */
    get(key)
    {
        return this._map.get(key)
    }
}
/**
     * Additional Info about Branch and Bound execution.
     */
export class BnBAdditionalInfo extends AdditionalInfo{
    /**
     * Additional Info about Branch and Bound execution.
     * @param {number} leafs 
     * @param {number} explored 
     * @param {number} pruned 
     */
    constructor (leafs,explored,pruned){
        super()
        super.add("leafs",leafs)
        super.add("explored",explored)
        super.add("pruned",pruned)
    }
}