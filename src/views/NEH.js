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
function NEH(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ordre, setOrder] = useState("");
  const [breaking, setBreaking] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
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
                <InstanceSelector></InstanceSelector>
                <br />
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5>Ordre de la séquence initiale:</h5>
                    <ButtonGroup>
                      <Button
                         size="sm"
                        color= {ordre==="dec"? "success" : "primary"}
                        onClick={() => setOrder("dec")}
                        // active={rSelected === 1}
                      >
                        Décroissant
                      </Button>
                      <Button 
                      size="sm"
                       
                      color= {ordre==="croi"? "success" : "primary"}
                      onClick={() => setOrder("croi")}
                        // active={rSelected === 2}
                      >
                        Croissant
                      </Button>
                      <Button
                         size="sm"
                         color= {ordre==="ale"? "success" : "primary"}
                         onClick={() => setOrder("ale")}
                        // active={rSelected === 2}
                      >
                        Aléatoire
                      </Button>
                      <Button
                        size="sm"
                        color= {ordre==="moyEcart"? "success" : "primary"}
                        onClick={() => setOrder("moyEcart")}
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
              <Button className="btn-fill" color="primary" type="submit" onClick ={()=> console.log(ordre)}>
                Calculer
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default NEH;
