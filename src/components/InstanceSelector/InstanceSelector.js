import React, { useState,useEffect } from "react";
// reactstrap components
import {
  Button,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
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
import { isTemplateSpan, isTypeNode } from "typescript";
import {getAllInstances} from "../../api/instances"
import {instanceFromStringMatrix,parseCSVFileAsInstance} from "../../utils/parse"
function InstanceSelector({onInstanceSelected}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [instance,setInstance] = useState(null)
  const [jobs, setJobs] = useState(0)
  const [machines, setMachines] = useState(0)
  const [costs, setCosts] = useState("")
  const [instances,setInstances] = useState([])
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  useEffect(() => {
      fetchInstances()
  }, [])
  useEffect(()=>{
    console.log(instances);
  },[instances])
  const fetchInstances = async ()=>{
    const insts = await getAllInstances()
    setInstances(insts)
  }
  const setInstanceById = (id)=>{
      const instance = instances?.find((val)=> val.id === id)
      setInstance(instance)
  }
  const handleInput = async (e) => {
    e.preventDefault();
    try {
        console.log(jobs);
        console.log(machines)
        console.log(costs);
      const instance = instanceFromStringMatrix(jobs, machines, costs.trim());
      setInstance(instance)
      console.log(instance);
    } catch (error) {
      alert(error.message);
    }
  }
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = async function (evt) {
        try {
          const instance = parseCSVFileAsInstance(evt.target.result);
          setInstance(instance)
          console.log(instance);
        } catch (error) {
          alert(error.message);
        }
      };

      reader.onerror = function (evt) {
        console.error("An error ocurred reading the file", evt);
      };

      reader.readAsText(file, "UTF-8");
    }
  }
  return (
    <>
      <Row>
        <Col className="pr-md-1" md="12">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Choisir une Instance</DropdownToggle>
            <DropdownMenu>
             {instances.map(item =>{
                 return (<DropdownItem onClick={e=>{
                     setInstanceById(e.currentTarget.id)
                 }} id={item.id} key={item.id}>{item.id}</DropdownItem>
                )
             })}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup>
            <label>Jobs</label>
            <Input
              value={jobs}
              placeholder="Number of jobs"
              type="number"
              min={0}
              onChange={e =>{
                setJobs(Number(e.target.value))
            }}
            />
            <label>Machines</label>
            <Input
              value={machines}
              placeholder="Number of machines"
              type="number"
              min={0}
              onChange={e =>{
                  setMachines(Number(e.target.value))
              }}
            />
            <Label for="costs">Costs</Label>
            <Input
            value={costs}
            type="textarea" name="costs" id="costs" onChange={e =>{
                  setCosts(e.target.value)
              }}/>
          </FormGroup>
          <Button className="btn-fill" color="primary" onClick={handleInput}>
            Create instance
          </Button>
          <Input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleUpload}
          ></Input>
          <Button className="btn-fill" color="secondary" 
          onClick={e =>{
            e.preventDefault();
            document.getElementById("file-upload").click();
          }}
          >
            Upload instance
          </Button>
        </Col>
      </Row>
      <Row>
          <Card>
              <CardBody >
                <CardTitle tag="h5">Instance Data</CardTitle>
                 <CardText>{JSON.stringify(instance?.toJSON(),null,4)}</CardText>
              </CardBody>
          </Card>
      </Row>
    </>
  );
}

export default InstanceSelector;
