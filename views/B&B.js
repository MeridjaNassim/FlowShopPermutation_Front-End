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

import "../assets/css/FSP.css"

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

function Branch_and_Bound(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [DFS, setDFS] = useState(false);
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
                <Row>
                <Col className="pr-md-1" md="12">
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>Choisir une Instance</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Foo Action</DropdownItem>
                      <DropdownItem>Bar Action</DropdownItem>
                      <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  </Col>
                </Row>
                <br/>
                <h5 className="pr-md-1" className="title">
                    Search Strategy
                  </h5>
                <Row>
                
                <Col className="pr-md-1" md="12">
                  <ButtonGroup>
                    <Button
                    className="radioCheck"
                      color="primary"
                      onClick={() => setDFS(true)}
                      //active={rSelected === 1}
                    >
                      Depth First Search
                    </Button>
                
                    <Button
                      className="radioCheck"
                      color="primary"
                      // onClick={() => setRSelected(2)}
                      // active={rSelected === 2}
                    >
                      Best First Search
                    </Button>
                  </ButtonGroup>
                  </Col>
                </Row>

                <Button
                  color="primary"
                  // onClick={() => setRSelected(1)}
                  // active={rSelected === 1}
                >
                  Initialisation avec heuristique
                </Button>
                
                
              </Form>
              <Row>
              <Col className="pr-md-1" md="12">
              <Button
                  color="primary"
                  // onClick={() => setRSelected(1)}
                  // active={rSelected === 1}
                >
                  Log
                </Button>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" type="submit">
                Calculer
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default Branch_and_Bound;
