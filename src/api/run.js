import Instance from "../models/Instance";
import Params from "../models/Params";
import { RunResult } from "../models/Result";
import { API } from "../api/middleware";
import { RUN_ENDPOINT } from "../api/endpoint";
/**
 * Runs an already existing instance and gets its result
 * @param {Number} job_count
 * @param {Number} machine_count
 * @param {String} instance_id
 * @param {String} method_id
 * @param {Params} params
 * @returns {Promise<RunResult>}
 */
export async function getExistingResults(
  job_count,
  machine_count,
  instance_id,
  method_id,
  params = null
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new RunResult(0, 0, 10.331, 330, [1, 3, 4, 5, 2], {
          leafs: 3,
          explored: 31243,
          pruned: 2134,
        }),
        1000
      );
    });
  });
}

/**
 * Runs a newly created or imported instance and gets its result
 * @param {Instance} instance
 * @param {String} method_id
 * @param {Params} params
 * @returns {Promise<RunResult>}
 */
export async function runNewInstance(method_id, instance, params = null) {
  const jsonInstance = instance?.toJSON();
  console.log(jsonInstance);
  const jsonParams = params?.asJSON();
  console.log(jsonParams);
  const res = await API.post(RUN_ENDPOINT, {
    method_id,
    instance : jsonInstance,
    params: jsonParams,
  });
  const data = res.data;
  if (data["error"]) {
    throw new Error(data["message"]);
  }
  return new RunResult(
    data["instance_id"],
    data["method"],
    data["execution_time"],
    data["makespan"],
    data["sequence"],
    data["additional_info"]
  );
}
/**
 * Runs a newly created or imported instance and gets its result
 * @param {string} instance_id
 * @param {String} method_id
 * @param {Params} params
 * @returns {Promise<RunResult>}
 */
export async function runInstance(method_id, instance_id, params = null) {
  const res = await API.post(RUN_ENDPOINT, {
    method_id,
    instance_id,
    params: params?.asJSON(),
  });
  const data = res.data;
  if (data["error"]) {
    throw new Error(data["message"]);
  }
  return new RunResult(
    data["instance_id"],
    data["method"],
    data["execution_time"],
    data["makespan"],
    data["sequence"],
    data["additional_info"]
  );
}
