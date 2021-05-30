import { BRANCH_AND_BOUND } from "constants/methods";
import {
  ACOParams,
  BranchAndBoundParams,
  CDSParams,
  GAParams,
  NEHParams,
  SAParams,
} from "../../models/Params";
import React from "react";
import { Button } from "reactstrap";

import { runNewInstance } from "../../api/run";
import { NEH } from "constants/methods";
import { SIMULATED_ANNEALING } from "constants/methods";
import { GENETIC_ALGORITHM } from "constants/methods";
import { CDS } from "constants/methods";
import { ANT_COLONY_OPTIMIZATION } from "constants/methods";
function Run({ instance, params, method_id, onComplete }) {
  const createParams = (params, method_id) => {
    switch (method_id) {
      case BRANCH_AND_BOUND:
        return new BranchAndBoundParams(
          params.strategy_id,
          params.parallel,
          params.use_heuristique,
          null
        );
      case NEH:
        return new NEHParams(
          params.strategy_id,
          params.parallel,
          params.use_heuristique,
          null
        );
      case SIMULATED_ANNEALING:
        return new SAParams(
          params.valInit,
          params.Ti,
          params.Tf,
          params.nbIterations,
          params.alpha
        );
      case GENETIC_ALGORITHM:
        return new GAParams(
          params.taillePoulation,
          params.nbGen,
          params.pc,
          params.pm
        );
      case CDS:
        return new CDSParams();
      case NEH:
        return new NEHParams(params.tie_breaking, params.order_jobs);
      case ANT_COLONY_OPTIMIZATION:
        return new ACOParams(
          (params.initValue),
          (params.nbAnts),
          (params.rho),
          (params.alpha ),
          (params.beta ),
          (params.q0),
          (params.heuristic_info_strategy),
          (params.nb_rounds ),
          (params.parallel),
          (params.threads ),
          (params.local_search ),
          (params.local_search_proba ),
          (params.local_search_nb_permutation )
        );
      default:
        break;
    }
  };
  const onClick = async (e) => {
    const paramss = createParams(params, method_id);
    try {
      const res = await runNewInstance(method_id, instance, paramss);
      console.log(res);
      onComplete(res);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Button className="btn-fill" color="primary" onClick={onClick}>
      Calculer
    </Button>
  );
}

export default Run;
