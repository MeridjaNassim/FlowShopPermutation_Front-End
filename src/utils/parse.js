import Instance from "../models/Instance"
import {generateInstanceIdFromTimeStamps} from "./common"
/**
 * Creates a matrix from a string representation
 * @param {number} jobs - job count
 * @param {number} machines - job count
 * @param {string} costs_str - the string representation of this matrix
 * @param {string} col_separator - the separator between column items
 * @param {string} row_separator - the separator between row items
 * @returns {Instance}
 */
export function instanceFromStringMatrix(jobs,machines,costs_str,col_separator=",",row_separator=/\r\n|\r|\n/){
    if( costs_str === undefined || costs_str.length === 0)
        throw new Error("string representation of matrix should be provided and non blank")
    const rows = costs_str.trim().split(row_separator)
    if(rows.length !== jobs){
        throw new Error("job rows count do not match provided value")
    }
    const matrix = rows.map((row) =>{
        const items = row.split(col_separator) 
        if(items.length !== machines){
            throw new Error("tasks of a job do not match provided value for machines count")
        }
        return items.map(item=> Number(item))
    } )
    return new Instance(generateInstanceIdFromTimeStamps(jobs,machines),jobs,machines,matrix)
    
}
/**
 * Parses an instances formated as CSV and returns an {Instance} object representing it
 * @param {string} file_content - the content of the file read  
 * @returns {Instance} the instance corresponding to the file
 */
export function parseCSVFileAsInstance(file_content,col_separator=",",row_separator=/\r\n|\r|\n/){
    if(file_content === undefined || file_content.length  === 0)
        throw new Error("No file content, cannot parse to instance")
    const trimed = file_content.trim()
    try{
        const lines = trimed.split(row_separator)
        const jobs = Number(lines[0])
        const machines= Number(lines[1])
        if(lines.length !== jobs+2)
        {
            throw new Error("unmatched jobs count")
        }
        /// looping over rows
        const costs = []
        for(let i = 2 ;i< lines.length;i++)
        {
            const row = lines[i];
            const items = row.split(col_separator).map(item => Number(item))
            if(items.length !== machines)
            {
                throw new Error("tasks do not match number of machines")
            }
            costs.push(items)
           
        }
        return new Instance(
            generateInstanceIdFromTimeStamps(jobs,machines),// generating an instance id
            jobs,
            machines,
            costs
        )
    }
    catch(e){
        throw new Error("Error while parsing, make sure your file is formatted correctly and that the format is supported, Details: "+e.message)
    }
}