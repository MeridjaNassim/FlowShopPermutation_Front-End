/**
 * Creates a string instance ID with the following format : {jobs}x{machines}-{timestamp}
 * @param {number} jobs 
 * @param {number} machines 
 */
export function generateInstanceIdFromTimeStamps(jobs,machines){
    return jobs+"x"+machines+"-"+(new Date).getTime()
}