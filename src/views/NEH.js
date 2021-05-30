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
  Label
} from "reactstrap";
import InstanceSelector from "../components/InstanceSelector/InstanceSelector"
import Dialog from "components/Dialog";
import Run from "components/Run/Run";
import {NEH as neh} from "../constants/methods"
function NEH(props) {
  const toggleModalSearch = () => {
    setIsOpen(!isOpen);
  };
  const [instance,setInstance] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ordre, setOrder] = useState("");
  const [breaking, setBreaking] = useState(false);
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
              <h2 className="title">Heuristique NEH</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5 className="title">Description</h5>
                    <p>
                      L'heuristique NEH est l'une des heuristiques les plus
                      connues pour l'ordonnancement des flux. Cette heuristique
                      n'est pas seulement efficace, elle est également simple à
                      calculer, et donc largement utilisée. Un grand nombre
                      d'études ont utilisé cette heuristique comme référence
                      pour comparer leurs résultats. Elle a été développée en
                      1983 par Nawaz, Enscore et Ham. Elle est basée sur l'idée
                      que les jobs avec un temps de traitement élevé sur toutes
                      les machines doivent être programmées le plus tôt possible
                      dans la séquence.
                    </p>
                  </Col>
                </Row>
                <br />
                <InstanceSelector onInstanceSelected={
                 (instance)=>{
                  setInstance(instance)
                 }
               }></InstanceSelector>
                <br />
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5>Ordre de la séquence initiale:</h5>
                    <ButtonGroup>
                      <Button
                         size="sm"
                        color= {ordre==="D"? "success" : "primary"}
                        onClick={() => setOrder("D")}
                        // active={rSelected === 1}
                      >
                        Décroissant
                      </Button>
                      <Button 
                      size="sm"
                       
                      color= {ordre==="SD"? "success" : "primary"}
                      onClick={() => setOrder("SD")}
                        // active={rSelected === 2}
                      >
                        Croissant
                      </Button>
                      <Button
                         size="sm"
                         color= {ordre==="RD"? "success" : "primary"}
                         onClick={() => setOrder("RD")}
                        // active={rSelected === 2}
                      >
                        Aléatoire
                      </Button>
                      <Button
                        size="sm"
                        color= {ordre==="AV"? "success" : "primary"}
                        onClick={() => setOrder("AV")}
                        // active={rSelected === 2}
                      >
                        Moyenne et écart type
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>

               
                  <Button
                        color= {breaking? "success" : "primary"}
                        onClick={() => setBreaking(!breaking)}
                    // active={rSelected === 1}
                  >
                    Tie Breaking Mechanism
                  </Button>
          
              </Form>
            </CardBody>
            <CardFooter>
            <Run
                instance={instance}
                params={{
                  order_jobs : ordre,
                  tie_breaking : breaking
                }}
                method_id={neh}
                onComplete={(res)=>{
                  setResult(res)
                  console.log(res);
                  setDialog(true)
                }}
              ></Run>
            </CardFooter>
          </Card>
        </Col>
      </div>
      <Dialog
          method="NEH"
          isOpen={dialog}
          toggleModalSearch={toggleDialog}
          sequence={result?.sequence}
          makeSpan={result?.makespan}
          executionTime={result?.execution_time}
          withOtherInfo={false}
        ></Dialog>
    </>
  );
}

export default NEH;
