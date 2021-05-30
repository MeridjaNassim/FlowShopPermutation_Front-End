/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

import "../assets/css/FSP.css";

// reactstrap components
import {
  Button,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import InstanceSelector from "components/InstanceSelector/InstanceSelector";
import Run from "components/Run/Run";
import { BRANCH_AND_BOUND } from "../constants/methods";
import { BranchAndBoundParams } from "models/Params";
import Dialog from "components/Dialog";
function Branch_and_Bound(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [strategy, setStrategy] = useState(1);
  const [instance, setInstance] = useState(null);
  const [initValue, setInitValue] = useState(false);
  const [parallel, setParallel] = useState(false);
  const [dialog, setDialog] = useState(false)
  const [result, setResult] = useState(null)
  const toggleDialog = ()=>setDialog(!dialog)
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  //const[DFS,setDFS]=useState(False);
  return (
    <>
      <div className="content">
        <Col md="8">
          <Card>
            <CardHeader>
              <h2 className="title">Branch and Bound</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5 className="title">Description</h5>
                    <p>
                      Le branch-and-bound est un paradigme de conception
                      d'algorithmes pour les problèmes d'optimisation discrète
                      et combinatoire, ainsi que pour l'optimisation
                      mathématique. Un algorithme de branchement et de
                      limitation consiste en une énumération systématique des
                      solutions candidates au moyen d'une recherche dans
                      l'espace d'état : l'ensemble des solutions candidates est
                      considéré comme formant un arbre à racines avec l'ensemble
                      complet à la racine. L'algorithme explore les branches de
                      cet arbre, qui représentent des sous-ensembles de
                      l'ensemble des solutions. Avant d'énumérer les solutions
                      candidates d'une branche, la branche est vérifiée par
                      rapport aux limites supérieures et inférieures estimées de
                      la solution optimale, et est rejetée si elle ne peut pas
                      produire une meilleure solution que la meilleure solution
                      trouvée jusqu'à présent par l'algorithme.
                    </p>
                  </Col>
                </Row>
                <InstanceSelector
                  onInstanceSelected={(instance) => {
                    setInstance(instance);
                  }}
                ></InstanceSelector>
                {/* <h2 className="title">Upload instance</h2>
                <Row>
                  <Col md="12">
                    <Input id="file-upload" type="file" style={{display : "none"}}></Input>
                  <Button className="btn-fill" color="secondary">
                    Upload instance
                </Button>
                  </Col>
                </Row> */}
                <br />
                <h5 className="pr-md-1" className="title">
                  Search Strategy
                </h5>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <ButtonGroup>
                      <Button
                        className="radioCheck"
                        color={strategy === 1 ? "success" : "primary"}
                        onClick={() => {
                          setStrategy(1);
                        }}
                        //active={rSelected === 1}
                      >
                        Depth First Search
                      </Button>

                      <Button
                        className="radioCheck"
                        color={strategy === 0 ? "success" : "primary"}
                        onClick={() => setStrategy(0)}
                        // active={rSelected === 2}
                      >
                        Best First Search
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>

                <Button
                  color={initValue ? "success" : "primary"}
                  onClick={() => setInitValue(!initValue)}
                  // active={rSelected === 1}
                >
                  Initialisation avec heuristique
                </Button>
              </Form>
              <Row>
                <Col className="pr-md-1" md="12">
                  <Button
                    color={parallel ? "success" : "primary"}
                    onClick={() => setParallel(!parallel)}
                    // active={rSelected === 1}
                  >
                    Run in Parallel
                  </Button>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <Run
                instance={instance}
                params={{
                  strategy_id: strategy,
                  parallel: parallel,
                  use_heuristique: initValue,
                }}
                method_id={BRANCH_AND_BOUND}
                onComplete={(res)=>{
                  setResult(res)
                  console.log(res);
                  setDialog(true)
                }}
              ></Run>
            </CardFooter>
          </Card>
        </Col>
        <Dialog
        method="Branch and bound"
          isOpen={dialog}
          toggleModalSearch={toggleDialog}
          sequence={result?.sequence}
          makeSpan={result?.makespan}
          executionTime={result?.execution_time}
          withOtherInfo={false}
        ></Dialog>
      </div>
    </>
  );
}

export default Branch_and_Bound;
