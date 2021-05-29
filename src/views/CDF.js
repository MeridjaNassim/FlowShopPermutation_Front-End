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

function CDF(props) {
  const [initValue, setInitValue] = useState("");
  const [nbFourmis, setNbFourmis] = useState("");
  const [rho, setRHO] = useState("");
  const [alpha, setAlpha] = useState("");
  const [beta, setBeta] = useState("");
  const [qo, setQo] = useState("");
  const [infoStrategy, setInfoStrategy] = useState("");
  const [nbRonds, setNbRonds] = useState("");
  const [nbThreads, setNbThreads] = useState("");
  const [localSearch, setLocalSearch] = useState(false);
  const [localSearchProb, setLocalSearchProb] = useState("");
  const [nbPremutLocalSearch, setnbPremutLocalSearch] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //const[DFS,setDFS]=useState(False);
  return (
    <>
      <div className="content">
        <Col md="8">
          <Card>
            <CardHeader>
              <h2 className="title">Colonnies de Fourmis</h2>
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
                    <br />
                  </Col>
                </Row>

               <InstanceSelector></InstanceSelector>
                <br />
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Valeur initiale</label>
                      <Input
                        defaultValue=""
                        placeholder="Valeur initiale"
                        type="text"
                        onChange={(e)=> setInitValue(e.target.value)}
                      />
                      <label>Nombre de fourmis</label>
                      <Input
                        defaultValue=""
                        placeholder="Nombre de fourmis"
                        type="text"
                        onChange={(e)=> setNbFourmis(e.target.value)}
                      />
                      <label>RHO</label>
                      <Input defaultValue="" placeholder="RHO" type="text" onChange={(e)=> setRHO(e.target.value)}/>
                      <label>Alpha</label>
                      <Input defaultValue="" placeholder="Alpha" type="text" onChange={(e)=> setAlpha(e.target.value)} />
                      <label>Beta</label>
                      <Input defaultValue="" placeholder="Beta" type="text" onChange={(e)=> setBeta(e.target.value)}/>
                      <label>Q0</label>
                      <Input defaultValue="" placeholder="Q0" type="text" onChange={(e)=> setQo(e.target.value)}/>
                    </FormGroup>
                  </Col>
                </Row>
                <h5>Heuristique Info Strategy</h5>
                <Row>
                  <Col className="pr-md-1" md="12">
                    <ButtonGroup>
                      <Button
                        color= {infoStrategy==="min"? "success" : "primary"}
                        onClick={() => setInfoStrategy("min")}
                        // active={rSelected === 1}
                      >
                        Min
                      </Button>
                      <Button
                        color= {infoStrategy==="avg"? "success" : "primary"}
                        onClick={() => setInfoStrategy("avg")}
                        // active={rSelected === 2}
                      >
                        Average
                      </Button>
                      <Button
                        color= {infoStrategy==="max"? "success" : "primary"}
                        onClick={() => setInfoStrategy("max")}
                        // active={rSelected === 2}
                      >
                        Max
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <label>Nombre de ronds</label>
                  <Input
                    defaultValue=""
                    placeholder="Nombre de ronds"
                    type="text"
                    onChange={(e)=> setNbRonds(e.target.value)}
                  />
                  <label>Nombre de threads</label>
                  <Input
                    defaultValue=""
                    placeholder="Nombre de threads"
                    type="text"
                    onChange={(e)=> setNbThreads(e.target.value)}
                  />
                  <Button
                        color= {localSearch? "success" : "primary"}
                        onClick={() => setLocalSearch(!localSearch)}
                    // active={rSelected === 2}
                  >
                    Local Search
                  </Button>
                  <br />
                  <br />
                  {
                    localSearch ? 
                  <div>
                  <label>Local Search Probabilité</label>
                  <Input
                    defaultValue=""
                    placeholder="Local Search Probabilité"
                    type="text"
                    onChange={(e)=> setLocalSearch(e.target.value)}
                  />

                  <label>
                    Nombre de permutations pour local search (si choisi){" "}
                  </label>
                  <Input
                    defaultValue=""
                    placeholder="Nombre de permutations pour local search"
                    type="text"
                    onChange={(e)=> setnbPremutLocalSearch(e.target.value)}
                  />
                  </div>
                  : 
                  <div></div>
                }
                </FormGroup>
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

export default CDF;
