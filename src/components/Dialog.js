import React  from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    
} from 'reactstrap';
export default function Dialog ({
  method,
  isOpen,
  toggleModalSearch,
  executionTime,
  makeSpan,
  sequence,
  withOtherInfo,
  leafs,
  exploredNodes,
  prunnedNodes
}) {
    return (
        <Modal
        modalClassName="modal-search"
        isOpen={isOpen}
        toggle={toggleModalSearch}
        color="primary"
      >
        <ModalHeader>
              <h3 className='results-dialog'> Method : {method} </h3>
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
        <ModalBody >
          <div className='row'>
            <div className='col-md-6'>
                <div className ='card'>
                    <div className='card-body'>
                      <div className='results-dialog'>
                        <h2 style={{fontSize: 30,fontWeight :"bold"}}> {executionTime} </h2>                      
                        <h4> Execution time (s)</h4>
                      </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className ='card'>
                    <div className='card-body'>
                      <div className='results-dialog'>
                        <h2 style={{fontSize: 30,fontWeight :"bold"}}> {makeSpan} </h2>                      
                        <h4> MakeSpan</h4>
                      </div>
                    </div>
                </div>
            </div>
          </div>  
          <div className="row">
            
          <div className='col-md-12'>
                <div className ='card'>
                    <div className='card-body'>
                      <div className='results-dialog'>
                        <ul style={{
                          listStyle : "none",
                          display: "flex",
                          margin: "auto",
                          flexDirection : "row",
                          width: "60%",
                          justifyContent : "center",
                          alignItems : "center"
                        }}> 
                          {(sequence != undefined) && sequence.map(s => <li
                          
                          style={{
                            flex: 1,
                            background: "orange",
                            padding: 5,
                            borderRadius : 5,
                            margin: 5
                          }}
                          
                          >{s}</li>)}
                           </ul>
                        <h4> Sequence </h4>                      
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
          </button>
        </ModalBody>
        {
          withOtherInfo? 
          <div>
            <ModalHeader>
                <h3> Other Information : </h3>
            </ModalHeader>
            <ModalBody>
              <div className='row'>
                  <div className='col-md-4'>
                      <div className ='card'>
                          <div className='card-body'>
                            <div className='results-dialog'>
                              <h2> 15 </h2>                      
                              <h4> Leafs</h4>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-4'>
                      <div className ='card'>
                          <div className='card-body'>
                            <div className='results-dialog'>
                              <h2> 60689</h2>                      
                              <h4> Explored nodes</h4>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-4'>
                      <div className ='card'>
                          <div className='card-body'>
                            <div className='results-dialog'>
                              <h2> 478935410</h2>
                              <h4> Prunned nodes </h4>                      
                            </div>
                          </div>
                      </div>
                  </div>
                </div>  
            </ModalBody>
        </div>
        :
        <div></div>
        }
      </Modal>
    );
}