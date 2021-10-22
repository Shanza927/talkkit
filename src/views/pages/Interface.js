import React from 'react';
import "../../assets/styles/Interface.scss";
import { Row, Col } from "reactstrap";
import Messages from "../../components/Messages";
const Interface = () => {
    return(
        <>
        <div className="body">
        <Row>
             <Col lg="3">
                 <div className="col1">
                  <Messages/>
                 </div>
              
            </Col>
            <Col lg="6" className="col2">
                        chat detail will show here
            </Col>
            <Col lg="3" className="col3">
                        workpsaces detail will show here
            </Col>
        </Row>

        </div>
        </>
    );
};
export default Interface;