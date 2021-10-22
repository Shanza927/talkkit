import react from "react";
import "../../assets/styles/Signup.scss";
import { Row, Col } from "reactstrap";
import "../../assets/styles/main.scss";
import image from "../../assets/icons/Group 10.png";
import logo from "../../assets/icons/Logo.png";
import line from "../../assets/icons/line.png";
import frame1 from "../../assets/icons/Frame 54.png";
import frame2 from "../../assets/icons/Frame 55.png";
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <>
         <div className="page">
            <Row  >
                <Col lg="6" className="cell1">
                        <img src={image} alt="" />
                </Col>
                <Col lg="6" className="cell2">
                    <div className="container">
                    <div className="logo">
                          <img src={logo} alt="" />
                   </div>
                   <div className="form"> 
                   <span className="heading4"> Sign Up &#8594;</span>
                   <div className="grow">
                   <div>
                        <label className=" heading6">First Name</label>
                        <input type="text"></input>
                    </div>
                    <div>
                                <label className=" heading6">Last Name</label>
                                <input type="text"></input>
                    </div>
                   </div>
                   <div className="tile">
                   <label className=" heading6">Email</label>
                   <input type="email"></input>
                   </div>
                   <div className="grow">
                   <div>
                                <label className=" heading6">password</label>
                                <input type="password"></input>
                    </div>
                    <div>
                                <label className=" heading6">Confirm Password</label>
                                <input type="password"></input>
                    </div>
                   
                   </div>
                   <div className="tile">
                        <button className="btn heading6"> Sign Up</button>
                    </div>
                    <div className="option">
                        <img src={line} alt=""/>
                    </div>
                    <div className="tile ">
                    <img src={frame1} alt="" />

                    </div>
                    <div className="tile">
                    <img src={frame2} alt="" />

                    </div>
                    <div className="heading6 swap">
              Already have an Account ?<Link to="/signin"> Sign In </Link>
                        </div>

                   </div>

                    </div>
                </Col>
            </Row>
            </div>

        </>
    );
};
export default Signup ;