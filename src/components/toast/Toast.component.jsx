import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ToastCart(props) {
   const [showA, setShowA] = useState(true);

   return(
      <Row>
         <Col md={6} className="mb-2">
            <Toast show={showA} onClose={props.close}>
               <Toast.Header>
                  <img
                     src="holder.js/20x20?text=%20"
                     className="rounded me-2"
                     alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
               </Toast.Header>
               <Toast.Body>
                  product update successfully!!!
               </Toast.Body>
            </Toast>
         </Col>;
      </Row>
   );
}

export {ToastCart}