/**
 * Class representing an Instance of the FSP problem
 * @property {number} job_count - propriety description
 * @public
 */
export default class Instance {
    id
    job_count
    machine_count
    processing_times
    constructor(id,job_count,machine_count,processing_times){
        this.job_count = job_count;
        this.machine_count = machine_count;
        this.processing_times = processing_times;
    }
    getJobCount()
    {
        return this.job_count;
    }
    getMachineCount()
    {
        return this.machineCount;
    }
    getProcessingTime(job,machine)
    {
        return this.processing_times[job][machine]
    }
    getJobByIndex(index){
        return this.processing_times[index]
    }

    toJSON(){
        return JSON.parse(
            {
                "id" : this.id,
                "jobs" : this.job_count,
                "machines" : this.machine_count,
                "instance" : this.processing_times
            }
        )
    }
}