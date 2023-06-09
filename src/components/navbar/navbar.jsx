import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import { IconContext } from "react-icons";
import { BsPersonCircle,BsFillPostcardFill } from "react-icons/bs";
import "./navbar.css";

function Navbar() {
     const [menubar, setmenubar] = useState(false);
     const [profile, setprofile] = useState(false);

     const showprofile = () => setprofile(!profile);
     const showmenubar = () => setmenubar(!menubar);
     return (
          <>
               {/* <IconContext.Provider value={{ color: '#fff' }}> */}
                    <div className="navbar_out">
                         <div className="navbar">
                              <Link to="#" className="menubars">
                                   <FaBars onClick={showmenubar} className="icons"/>
                              </Link>
                         </div>
                         <div className="title">
                              <h1 className="title_txt">Musketeers</h1>
                         </div>
                         <div>
                              <div className="navbar">
                                   <Link to="#" className="profile">
                                        <BsPersonCircle onClick={showprofile} className="icons" />
                                   </Link>
                              </div>
                              <nav className={profile ? "profile_menu active" : "profile_menu"}>
                                   <ul className="profile_items" onClick={showprofile}>
                                        <li>
                                             <div className="profile_part_1">
                                                  <Link to="#" className="profile_image">
                                                       <BsPersonCircle onClick={showprofile} className="icons" />
                                                  </Link>
                                                  <div className="profile_name_mail">
                                                       <h1 className="nam">Akash Reddy</h1>
                                                       <hr className="hr1"/>
                                                       <h1 className="nam">akashreddy@gmail.com</h1>
                                                  </div>
                                             </div>
                                        </li>
                                        <li className="profile_menu_items_li">
                                             <BsFillPostcardFill className="manage_account_icon"/>
                                             <h1 className="profile_menu_items_txt">Manage Account</h1>
                                        </li>
                                        <li className="profile_menu_items_li" id="signin_out_btn">
                                             <h1 className="profile_menu_items_txt">Signout</h1>
                                        </li>
                                   </ul>
                              </nav>
                         </div>
                    </div>
                    <nav className={menubar ? "nav_menu isactive" : "nav_menu"}>
                         <ul className="menu_items" onClick={showmenubar}>
                              <li className="navbar_toggle">
                                   <Link to="#" className="menubars">
                                        <AiOutlineClose className="icons"/>
                                   </Link>
                              </li>
                              <li className="navbar_text">
                                   <Link to="/" className="menubars">
                                        <span> Home </span>
                                   </Link>
                              </li>
                              <li className="navbar_text">
                                   <Link to="/mylearning" className="menubars">
                                        <span> My Learning </span>
                                   </Link>
                              </li>
                              <li className="navbar_text">
                                   <Link to="/about" className="menubars">
                                        <span> About </span>
                                   </Link>
                              </li>
                              <li className="navbar_text">
                                   <Link to="/forum" className="menubars">
                                        <span> Discussion Forum </span>
                                   </Link>
                              </li>
                              <li className="navbar_text">
                                   <Link to="help" className="menubars">
                                        <span> Help  </span>
                                   </Link>
                              </li>

                              <li className="navbar_text">
                                   <Link to="feedback" className="menubars">
                                        <span> Feedback  </span>
                                   </Link>
                              </li>
                         </ul>
                    </nav>
               {/* </IconContext.Provider> */}
          </>
     )
}

export default Navbar;