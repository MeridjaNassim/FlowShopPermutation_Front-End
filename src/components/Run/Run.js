import { BRANCH_AND_BOUND } from "constants/methods";
import { BranchAndBoundParams, NEHParams } from "../../models/Params";
import React from "react";
import { Button } from "reactstrap";

import { runNewInstance } from "../../api/run";
import { NEH } from "constants/methods";
function Run({ instance, params, method_id,onComplete }) {
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

      default:
        break;
    }
  };
  const onClick = async (e) => {
    const paramss = createParams(params, method_id);
    try {
      const res = await runNewInstance(method_id, instance, paramss);
      console.log(res);
      onComplete(res)
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
