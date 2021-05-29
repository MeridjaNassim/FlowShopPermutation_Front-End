import Instance from "../models/Instance"
import Params from "../models/Params"
import {RunResult} from "../models/Result"
/**
 * Runs an already existing instance and gets its result
 * @param {Number} job_count 
 * @param {Number} machine_count 
 * @param {String} instance_id 
 * @param {String} method_id 
 * @param {Params} params 
 * @returns {Promise<RunResult>}
 */
export async function getExistingResults(job_count,machine_count,instance_id,method_id,params=null)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new RunResult(
                0,
                0,
                10.331,
                330,
                [1,3,4,5,2],
                {
                    "leafs" : 3,
                    "explored" : 31243,
                    "pruned" : 2134
                }
            ),1000)
        })
    })
}

/**
 * Runs a newly created or imported instance and gets its result
 * @param {Instance} instance 
 * @param {String} method_id
 * @param {Params} params 
 * @returns {Promise<RunResult>}
 */
export async function runNewInstance(method_id,instance,params=null)
{
    const jsonInstance = instance?.toJSON()
    console.log(jsonInstance);
    const jsonParams = params?.asJSON()
    console.log(jsonParams);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new RunResult(
                0,
                0,
                10.331,
                330,
                [1,3,4,5,2],
                {
                    "leafs" : 3,
                    "explored" : 31243,
                    "pruned" : 2134
                }
            ),1000)
        })
    })
}