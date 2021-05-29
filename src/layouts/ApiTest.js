import { getInstance,getAllInstances } from 'api/instances'
import React,{useEffect,useState } from 'react'
import Params, { BranchAndBoundParams } from "../models/Params"
import {runNewInstance,getExistingResults} from "api/run"
import {instanceFromStringMatrix,parseCSVFileAsInstance} from "../utils/parse"
import Instance from '../models/Instance'
import { generateInstanceIdFromTimeStamps } from 'utils/common'
function ApiTest() {
    const [instance, setinstance] = useState(null)
    const [jobs, setJobs] = useState(0)
    const [machines, setMachines] = useState(0)
    const [costs, setCosts] = useState("")
    const [fileContent,setFileContent] = useState(null)
    useEffect(() => {
        fetchInstance()
        fetchAllInstances()

        const params = new BranchAndBoundParams(
            1,
            true,
            true,
            2
        )
       
        runInstance(0,1,params)
    }, [])
    const fetchInstance = async ()=>{
        const instance = await getInstance(20,20,0)
        console.log(instance);
    }
    const fetchAllInstances = async ()=>{
        const instances = await getAllInstances()
        console.log(instances);
    }
    /**
     * Runs the selected instance
     * @param {Number} instance_id 
     * @param {Number} method_id 
     * @param {Params} params 
     */
    const runInstance = async (instance_id,method_id,params)=>{
        console.log(params.asJSON());
        const instance = new Instance(null,2,2,[
            [3,3],
            [5,4]
        ])
        const res = await runNewInstance(method_id,instance,params)
        console.log('Result ====================================');
        console.log(res);
        console.log('====================================');
    }
    return (
        <div style={{
            "display" : "block"
        }}>
            <form>
            
            <label htmlFor="jobs">Job count</label>
          <input name="jobs" type="number" min={0} id="jobs-input" value={jobs} onChange={
              (e)=>{
                  setJobs(Number(e.target.value))
              }
          }></input> 
          <label for="machines" >machine count</label>
          <input name="machines" type="number" min={0} id="machines-input" values={machines} onChange={
              (e)=>{
                  setMachines(Number(e.target.value))
              }
          }></input>
          <label htmlFor="costs">Processing times</label>
          <textarea name="costs" id="costs-input" placeholder="add costs seperated by comma (,); rows are jobs columns are machines" 
          values={costs} onChange={
                (e)=>{
                setCosts(e.target.value)
                }
            }
          ></textarea>
           <button onClick={(e)=>{
              e.preventDefault()
            try {
                const instance = instanceFromStringMatrix(jobs,machines,costs)
                setinstance(instance)
                console.log(instance);
            } catch (error) {
                alert(error.message)
            }
            
            
          }}>Create Instance</button>
          <button style={{display : "block", width: 120,height:30}} onClick={(e)=>{
              e.preventDefault();
              document.getElementById('upload').click()
          }}>Upload CSV instance</button>
          <input id="upload"type="file" title="upload instance"  style={{display : "none"}} onChange={
             (e)=>{
                const file = e.target.files[0];

                if (file) {
                    var reader = new FileReader();
              
                    reader.onload = function (evt) {
                      console.log(evt);
                      setFileContent(evt.target.result)
                      console.log(evt.target.result);
                      try {
                        const instance = parseCSVFileAsInstance(evt.target.result)
                        setinstance(instance)
                        console.log(instance);
                      } catch (error) {
                          alert(error.message)
                      }
                      
                    };
              
                    reader.onerror = function (evt) {
                      console.error("An error ocurred reading the file",evt);
                    };
              
                    reader.readAsText(file, "UTF-8");
                  }
              }
          }></input>
         
          </form>
        </div>
    )
}

export default ApiTest
