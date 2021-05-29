import React  from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    
} from 'reactstrap';
export default function Dialog (props) {
    return (
        <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
              <h3 className='results-dialog'> Method : NEH </h3>
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
                        <h2> 37sec </h2>                      
                        <h4> Execution time</h4>
                      </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className ='card'>
                    <div className='card-body'>
                      <div className='results-dialog'>
                        <h2> 60sec </h2>                      
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
                        <h2> 4,5,6,8,7,9</h2>
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
      </Modal>
    );
}