import {API} from "./middleware"
import Instance from "../models/Instance"
import { ALL_INSTANCES_ENDPOINT, INSTANCE_ENDPOINT } from "./endpoint"

export async function getAllInstances()
{
    try {
        const res = await API.get(ALL_INSTANCES_ENDPOINT)
        const data  = res.data
        if(data["error"])
            throw new Error(data["message"])
        return data["instances"].map((item)=>{
            return new Instance(
                item["id"],
                item["jobs"],
                item["machines"],
                item["instance"]
                )
        })
       } catch (error) {
           console.log("Could not get instance " + error);
           return null;
       } 
}
export async function getInstance(job_count,machine_count,instance_id){
   try {
    const res = await API.get(INSTANCE_ENDPOINT,{
        params :{
            jobs : job_count,
            machines : machine_count,
            instance : instance_id
        }
    })
    const data  = res.data
    if(data["error"])
        throw new Error(data["message"])
    return new Instance(
        instance_id,
        data["jobs"],
        data["machines"],
        data["instance"]
        )
   } catch (error) {
       console.log("Could not get instance " + error);
       return null;
   }
}