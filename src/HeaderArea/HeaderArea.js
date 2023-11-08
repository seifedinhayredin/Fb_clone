import React from "react";
import './HeaderArea.css';
import {AiFillHighlight, AiFillHome, AiOutlineSearch, AiOutlineWallet} from 'react-icons/ai';
import {FaRegFlag,FaUsers,FaPlusCircle,FaBell,FaFacebookMessenger } from 'react-icons/fa';
import MainArea from '../MainArea/MainArea';
function HeaderArea(){
    return (
        <div className="HomePage">
            <div className="header">
                <div className="first-header">
                    <div className="logo">
                        <img src="images/logo.jpg" alt="not found" style={{height:"50px",padding:"1rem"}}/>
                    </div>
                    <div className="Search">
                        <AiOutlineSearch style={{height:"4rem"}} />
                        <input placeholder="search facebook" type="search"/>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="Icon">
                        <AiFillHome fontSize="2.3rem" color="#1877F2" />
                    </div>
                    <div className="Icon">
                        <FaRegFlag fontSize="2.3rem" />
                    </div>
                   
                    <div className="Icon">
                        <FaUsers fontSize="2.3rem"  />
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet fontSize="2.3rem" />
                    </div>
                </div>
                <div className="third-header">
                    <div className="plus">
                        <FaPlusCircle ontSize="2rem"  />
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger ontSize="2rem"  />
                    </div>
                    <div className="plus">
                        <FaBell ontSize="2rem"  />
                    </div>
                    <div className="plus">
                        <img src="images/mine.jpg" style={{height:"50px",padding:"1rem"}} />
                    </div>
                </div>
            </div>
            <MainArea />
        </div>
    );
}
export default HeaderArea;