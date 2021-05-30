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
import React, {useState} from "react";
import {CDS as cds} from "../constants/methods"
import Dialog from "components/Dialog";
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
import InstanceSelector from "../components/InstanceSelector/InstanceSelector"
function CDS(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
                <InstanceSelector onInstanceSelected={
                 (instance)=>{
                  setInstance(instance)
                 }
               }></InstanceSelector>
                
              </Form>
            </CardBody>
            <CardFooter>
            <Run
                instance={instance}
                params={{
                }}
                method_id={cds}
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
        method="CDS"
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

export default CDS;
