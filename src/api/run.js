import Instance from "../models/Instance"
import Params from "../models/Params"
/**
 * Runs an already existing instance and gets its result
 * @param {Number} job_count 
 * @param {Number} machine_count 
 * @param {String} instance_id 
 * @param {String} method_id 
 * @param {Params} params 
 * @returns {Promise<any>}
 */
export async function getExistingResults(job_count,machine_count,instance_id,method_id,params=null)
{
    
}

/**
 * Runs a newly created or imported instance and gets its result
 * @param {Instance} instance 
 * @param {String} method_id
 * @param {Params} params 
 * @returns {Promise<any>}
 */
export async function runNewInstance(method_id,instance,params=null)
{
 
}