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

function CDS(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="content">
        <Col md="8">
          <Card>
            <CardHeader>
              <h2 className="title">Heuristique CDS</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <h5 className="title">Description</h5>
                    <p>
                    Cette méthode a été proposée par Campbell, Dudek et Smith en 1970. Elle s’appuie sur l’algorithme optimal de Johnson qui résout les problèmes de flowshop à deux machines avec une complexité polynomiale. L’idée consiste - pour une instance de n job et m machine – à créer (m-1) instances fictives de n jobs et de deux machines, puis résoudre ces instances en utilisant Johnson. Ensuite, prendre l’ordonnancement avec le minimum makespan (l’instant ou se termine le dernier job dans la dernière machine).  

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
               <Row>
                <Col className="pr-md-1" md="12">
                  <ButtonGroup>
                    <Button
                      color="primary"
                      // onClick={() => setRSelected(1)}
                      // active={rSelected === 1}
                    >
                      One
                    </Button>
                    <Button
                      color="primary"
                      // onClick={() => setRSelected(2)}
                      // active={rSelected === 2}
                    >
                      Two
                    </Button>
                  </ButtonGroup>
                  </Col>
                </Row>
                <Button
                      color="primary"
                      // onClick={() => setRSelected(1)}
                      // active={rSelected === 1}
                    >
                      One
                    </Button>
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

export default CDS;
