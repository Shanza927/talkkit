import React from 'react';
import "../assets/styles/Interface.scss";
import sideBar from "../assets/icons/Side Nav.png";
import msg from "../assets/icons/Messages.png";
import unread1 from "../assets/icons/Unread Messages 1.png";
import unread from "../assets/icons/Unread Messages.png";
import unread2 from "../assets/icons/Unread Messages 2.png";
import HackFest from "../assets/icons/Channel 1.png";
import VT from "../assets/icons/Channel.png";
import addMore from "../assets/icons/shape.png";
import profile1 from "../assets/icons/Ellipse 3.png";
import profile2 from "../assets/icons/Ellipse 2.png";
import profile3 from "../assets/icons/Ellipse 1.png";
import profile4 from "../assets/icons/Ellipse 4.png";
import profile5 from "../assets/icons/Ellipse 5.png";
import profile6 from "../assets/icons/Ellipse 6.png";
import Frame from './Frame';
import { BiSearch } from "react-icons/bi";
import { Row, Col } from "reactstrap";
const Messages = () => {
    return(
        <>
        <div className="sideNav">
                  <img src={sideBar} alt="" />
                  </div>
                  <div className="messages">
                      <div className="heading">
                      <img src={msg} alt=""/>
                      <img src={unread} alt=""/>
                      
                      </div>
                  <div  className="msgSearch">
                
                        <input type="text" placeholder="Search"></input>
                        <BiSearch className="searchIcon" size={33} />
                       
                    </div>
                    <div className="titleFrame">
                      <span className="body1"> CHANNELS </span>
                      <img src={addMore} alt=""/>
                      </div>
                      <div className="channels">
                          <div className="HF">
                          <Frame profile ={HackFest} name ="HackFest'21" />
                              <img src={unread2} />
                          </div>
                          <div className="VT">
                              <Frame profile ={VT} name ="Venturenoux Team" />
                          </div>
                          </div>
                          <div className="titleFrame">
                               <span className="body1"> DIRECT MESSAGES </span>
                               <img src={addMore} alt=""/>
                           </div>
                           <div className="directMessages">
                           <div className="msgUnread">
                          <Frame profile ={profile1} name ="Ammar" />
                              <img src={unread1} />
                          </div>
                          <Frame profile ={profile2} name ="Sharjeel" />
                          <Frame profile ={profile3} name ="Faizan" />
                          <Frame profile ={profile4} name ="Zain" />
                          <div className="msgUnread">
                          <Frame profile ={profile5} name ="Hamza" />
                              <img src={unread} />
                          </div>
                          <Frame profile ={profile6} name ="Ammar" />
                           </div>




                      
                  </div>

        </>
    );
};
export default Messages;