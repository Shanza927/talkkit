import react from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/styles/main.scss";
import image from "../../assets/icons/Group 11.png";
import logo from "../../assets/icons/Logo.png";
import line from "../../assets/icons/line.png";
import frame1 from "../../assets/icons/Frame 54.png";
import frame2 from "../../assets/icons/Frame 55.png";
const Signin = () => {
    return (
    <>
            <div className="page">
            <Row  >
                <Col lg="6" className=" cell1">
                        <img src={image} alt="" />
                </Col>
                <Col lg="6" className=" cell2">
                    <div className="container">
                    <div className="logo">
                          <img src={logo} alt="" />
                   </div>
                   <div className="form"> 
                   <span className="heading4"> Sign In &#8594;</span>
                   <div className="tile">
                   <label className=" heading6">Email</label>
                   <input type="email"></input>
                   </div>
                   <div className="tile">
                   <label className=" heading6">password</label>
                   <input type="password"></input>
                   </div>
                   <div className="tile">
                        <button className="btn heading6"> Sign In</button>
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
              Don't have an Account ?<Link to="/interface"> Sign Up </Link>
                        </div>

                   </div>

                    </div>
                </Col>
            </Row>
            </div>
    </>
    );
};
export default Signin;
