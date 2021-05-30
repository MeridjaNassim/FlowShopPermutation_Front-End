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
import InstanceSelector from "components/InstanceSelector/InstanceSelector";
import Run from "components/Run/Run";
import { SIMULATED_ANNEALING } from "constants/methods";
import React, { useState } from "react";

// reactstrap components
import {
  Button,
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
import Dialog from "components/Dialog";
function SA(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [Ti, setTi] = useState(200);
  const [Tf, setTf] = useState(0.01);
  const [alpha, setAlpha] = useState(0.93);
  const [instance,setInstance] = useState(null)
  const [nbIteration, setNbIteration] = useState(10);
  const [valInit, setValInit] = useState("CDS");
  const [dialog, setDialog] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [result, setResult] = useState(null)
  const toggleDialog = ()=>setDialog(!dialog)
  return (
    <>
      <div className="content">
        <Col md="8">
          <Card>
            <CardHeader>
              <h2 className="title">Récuit Simulé</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5 className="title">Description</h5>
                    <p>
                      Le recuit simulé est une méthode d’optimisation proposée
                      pour la résolution d’un problème de placement en VLSI
                      (Very Large Scale Integration). Son nom est inspiré du
                      principe de la thermodynamique, celui du comportement des
                      métaux lorsqu'ils chauffent et refroidissent. Il s'agit de
                      chauffer le métal à une température extrêmement élevée,
                      puis de le refroidir progressivement jusqu'à ce qu'il
                      atteigne son état d'énergie minimale, qui est la
                      configuration la plus régulière possible pour le métal. Si
                      le métal est refroidi trop rapidement, il se retrouvera
                      sous une forme inutile puisque le processus de chauffage
                      déplacera les atomes de façon aléatoire, modifiant la
                      structure interne. Cette analogie peut être utilisée pour
                      la planification des tâches, les états du solide étant des
                      solutions réalisables et la forme finale du solide, la
                      solution optimale. Le concept a été introduit pour la
                      première fois par Metropolis et al [NM en 1953] et ensuite
                      étudié plus en détail par Kirkpatrick et al [SK en 1983]
                      et Fetterolf et Anandalingam [PCF en 1991] pour les
                      modèles d'optimisation discrets [AS en 1996].
                    </p>
                  </Col>
                </Row>
                <InstanceSelector onInstanceSelected={
                 (instance)=>{
                  setInstance(instance)
                 }
               }></InstanceSelector>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Température initiale</label>
                      <Input
                        defaultValue=""
                        placeholder="Température initiale"
                        type="text"
                        onChange={(e)=> setTi(Number(e.target.value))}
                      />
                      <label>Température finale</label>
                      <Input
                        defaultValue=""
                        placeholder="Température finale"
                        type="text"
                        onChange={(e)=> setTf(Number(e.target.value))}
                      />
                      <label>Alpha</label>
                      <Input defaultValue="" placeholder="Alpha" type="text" onChange={(e)=> setAlpha(Number(e.target.value))}/>
                      <label>Nombre d'itérations</label>
                      <Input defaultValue="" placeholder="Nombre d'itérations" type="text" onChange={(e)=> setNbIteration(Number(e.target.value))}/>
                    </FormGroup>
                  </Col>
                </Row>
                <h5>Valeur initiale</h5>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <ButtonGroup>
                      <Button
                        color= {valInit==="neh"? "success" : "primary"}
                        onClick={() => setValInit("NEH")}
                        // active={rSelected === 1}
                      >
                        NEH
                      </Button>
                      <Button
                        color= {valInit==="cds"? "success" : "primary"}
                        onClick={() => setValInit("CDS")}
                        // active={rSelected === 2}
                      >
                        CDS
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
            <Run
                instance={instance}
                params={{
                  Ti: Ti,
                  Tf: Tf,
                  alpha: alpha,
                  valInit: valInit,
                  nbIteration : nbIteration,
                }}
                method_id={SIMULATED_ANNEALING}
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
        method="Simulated Annealing"
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

export default SA;
