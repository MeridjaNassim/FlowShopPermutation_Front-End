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

function SA(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
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
                <Row>
                  <Col className="pr-md-1" md="12">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle caret>
                        Choisir une Instance
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>

                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Température initiale</label>
                      <Input
                        defaultValue=""
                        placeholder="Température initiale"
                        type="text"
                      />
                      <label>Température finale</label>
                      <Input
                        defaultValue=""
                        placeholder="Température finale"
                        type="text"
                      />
                      <label>Alpha</label>
                      <Input defaultValue="" placeholder="Alpha" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <h5>Valeur initiale</h5>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <ButtonGroup>
                      <Button
                        color="primary"
                        // onClick={() => setRSelected(1)}
                        // active={rSelected === 1}
                      >
                        NEH
                      </Button>
                      <Button
                        color="primary"
                        // onClick={() => setRSelected(2)}
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

export default SA;
