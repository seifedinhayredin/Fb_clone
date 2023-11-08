import React from "react";
import './MainArea.css';
import {FaMedrt,FaFontAwesomeFlag, FaFacebookMessenger, FaMedkit,FaAngleDown, FaUserFriends, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare} from 'react-icons/fa'
import { AiFillFileImage } from "react-icons/ai";
import {MdVideoCall, MdMoreHoriz} from 'react-icons/md'
function MainArea(){
    return(
        <div className="Main">
            <div className="Rside">
                <div className="Profile">
                    <img src="/images/mine.jpg" alt="no" style={{height:"60px",padding:"arem"}} />
                    Seifedin Hayredin
                </div>
                <div className="Pro">
                    <FaUserFriends color="blue" fontSize="1rem" />
                    <div>Friends</div>
                </div>
                <div className="Pro">
                    <FaFontAwesomeFlag color="green" fontSize="1rem" />
                    <div>Pages</div>
                </div>
                <div className="Pro">
                    <FaMedkit color="blue" fontSize="1rem" />
                    <div>COVID-19 Information Center</div>
                </div>
                <div className="Pro">
                    <FaFacebookMessenger color="green" fontSize="1rem" />
                    <div>Messenger</div>
                </div>
                <div className="Pro">
                    <FaAngleDown color="green" fontSize="1rem" />
                    <div>See more</div>
                </div>
                <br />


                <div className="Profiles">
                    <img src="/images/mine.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                    React Developers
                </div>
                <div className="Profiles">
                    <img src="/images/mine.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   MEAN STACK
                </div>
                <div className="Profiles">
                    <img src="/images/mine.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   JavaScript
                </div>
                <div className="Profiles">
                    <img src="/images/mine.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                    React Developers
                </div>
                <div className="Pross">
                    <FaAngleDown color="blue" fontSize="2rem" />
                    <div>See More</div>
                </div>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="/images/mine.jpg" alt="img" style={{height:"60px", width:"50PX",borderRadius:"60%"}} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                       Author
                    </div>
                    <div className="Story">
                        <img src="/images/flower.jpg" alt="img" style={{height:"60px", width:"50PX",borderRadius:"60%"}} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                       Flowers
                    </div>
                    <div className="Story">
                        <img src="/images/night.jpg" alt="img" style={{height:"60px", width:"50PX",borderRadius:"60%"}} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        Night
                    </div>
                    <div className="Story">
                        <img src="/images/tech.jpg" alt="img" style={{height:"60px", width:"50PX",borderRadius:"60%"}} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                       Photos
                    </div>
                </div>
                <div className="message">
                    <div className="text">
                        <div className="Post">
                        <img src="/images/mine.jpg" alt="PIC"  />
                        <input type="Mind" placeholder="What is on your mind, seifedin" />
                        </div>
                        <div className="Call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontSize="2rem" color="red" />
                                    <div>Live Video</div>
                                </div>
                                <div className="icone">
                                    <AiFillFileImage fontSize="2rem" color="green" />
                                    <div>Photo/Video</div>
                                </div>
                                <div className="icone">
                                    <FaGrin fontSize="2rem" color="orange" />
                                    <div>Felling/Activity</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="Posted">
                        <div className="poster">
                            <div className="Simplilearn">
                                <img src="/images/mine.jpg" alt="Img" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                                Seifedin
                                <div className="update"> Updated his cover image.</div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                        <div className="caption">
                            Please Like, Comment and Subscribe to our YouTube Channel.
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                            <img src="/images/mine.jpg" alt="dp" style={{height:"auto",width:"100%"}}/>
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="grey"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey"/>Share
                            </div>
                        
                        </div>
                    </div>
                </div>

            </div>

            <div className ="Lside">
             <div className="Contact">  
                 <div className="Contacts">
                     Contacts
                 </div>
             
             <div className="chaticon">
                 <div className="icons">
                     <MdVideoCall fontSize="1.8rem"/>
                 </div>
                 <div className="icons">
                        <FaSearch fontSize="1.6rem"/>
                     </div>
                     <div className="icons">
                        <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                </div>
                </div>
            <div className="concise">
                <div className="Profilee">
                    <img src="images/p1.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Abdulhafiz
                </div>
                <div className="Profilee">
                    <img src="images/p2.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Malda
                </div>
                <div className="Profilee">
                    <img src="images/p3.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Tolera
                </div>
                <div className="Profilee">
                    <img src="images/p4.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Tegbabu
                </div>
                <div className="Profilee">
                    <img src="images/p5.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Tadiwos
                </div>
            </div>



                </div>
            </div>

        
    )
}
export default MainArea;