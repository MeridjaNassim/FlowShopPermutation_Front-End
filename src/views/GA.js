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
import Run from "components/Run/Run";
import { GENETIC_ALGORITHM } from "constants/methods";
import React, {useState} from "react";

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
import InstanceSelector from "../components/InstanceSelector/InstanceSelector"
function GA(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [taillePoulation, setTaillePopulation] = useState(12);
  const [nbGen, setNbGen] = useState(70);
  const [pc, setPc] = useState(0.9);
  const [pm, setPm] = useState(0.06);
  const [instance,setInstance] = useState(null)
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
              <h2 className="title">Algorithmes Génétiques</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5 className="title">Description</h5>
                    <p>
                      En informatique et en recherche opérationnelle, un
                      algorithme génétique (AG) est une métaheuristique inspirée
                      par le processus de sélection naturelle qui appartient à
                      la grande classe des algorithmes évolutionnaires (EA). Les
                      algorithmes génétiques travaillent de manière itérative
                      sur une population de solutions candidates au problème
                      donné. Ce sont des algorithmes de recherche probabiliste,
                      qui imitent l'évolution biologique pour produire des
                      solutions de progéniture qui s'améliorent progressivement
                      (Ying-Hua et Young Chang). Chaque solution à un problème
                      donné peut être encodée par un chromosome qui représente
                      un individu dans une population. Chaque chromosome est
                      composé d'une séquence de gènes d'un certain alphabet.
                      L'alphabet peut être un ensemble de nombres binaires, de
                      nombres réels, entiers, de symboles ou de matrices.
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
                      <label>Taille de la population</label>
                      <Input
                        defaultValue=""
                        placeholder="Taille de la population"
                        type="text"
                        onChange={(e)=> setTaillePopulation(Number(e.target.value))}
                      />
                      <label>Nombre de génerations</label>
                      <Input
                        defaultValue=""
                        placeholder="Nombre de génerations"
                        type="text"
                        onChange={(e)=> setNbGen(Number(e.target.value))}
                      />
                      <label>Pc</label>
                      <Input defaultValue="" placeholder="Pc" type="text" onChange={(e)=> setPc(Number(e.target.value))}/>
                      <label>Pm</label>
                      <Input defaultValue="" placeholder="Pm" type="text" onChange={(e)=> setPm(Number(e.target.value) )}/>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
            <Run
                instance={instance}
                params={{
                  taillePoulation,
                  nbGen,
                  pc,
                  pm,
                  }}
                method_id={GENETIC_ALGORITHM}
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
        method="Genetic Algorithm"
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

export default GA;
