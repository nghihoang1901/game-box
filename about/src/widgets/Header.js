import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "../../../gallery/src/Gallery";
import About from "../About";
// import  'dotenv / config';
// import  express  from  'express';



class Header extends Component {
    constructor(props) {
        super(props);
    }
    NODE_PATH = "./src/..";
    render() {
        return (
            <div>
                <div class="top-banner">
                    <div class="header">
                        <div class="container">
                            <div class="headr-left">
                                <div class="social">
                                    <a href="#"><i class="facebook"></i></a>
                                    <a href="#"><i class="twitter"></i></a>
                                    <a href="#"><i class="gplus"></i></a>
                                    <a href="#"><i class="pin"></i></a>
                                    <a href="#"><i class="youtube"></i></a>
                                </div>
                                <div class="search">
                                    <form>
                                        <input type="submit" value="" />
                                        <input type="text" value="" placeholder="Search..." />
                                    </form>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="headr-right">
                                <div class="details">
                                    <ul>
                                        <li><a href="mailto@example.com"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>info(at)example.com</a></li>
                                        <li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1)000 123 456789</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>

                    {/* <!--banner-info-->	 */}
                    <div class="banner-info">
                        <div class="container">
                            <div class="logo">
                                <h1><a href="index.html">GAME BOX</a></h1>
                            </div>
                            <div class="top-menu">
                                <span class="menu"></span>
                                <ul class="nav1">
                                    {/* <li><a href="index.html">Home</a></li>
                                    <li class="active"><a href="about.html">About</a></li>
                                    <li><a href="reviews.html">Reviews</a></li>
                                    <li><a href="typo.html">News</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="contact.html">Mail</a></li> */}

                                    <Router>
                                        <Routes>
                                            <Route path={"/gallery"} element={<Gallery />} />
                                            <Route path='/' element={<About />} />
                                        </Routes>
                                    </Router>

                                </ul>
                            </div>
                            
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- banner --> */}
                <div class="banner">
                    <div class="bnr2">
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;