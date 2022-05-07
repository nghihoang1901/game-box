import React, { Component } from "react";

import TrangChu from "../Page/TrangChu";
import Cart from "../Module/cart";
import GioHang from "../Page/GioHang";
import {Routes, Route  } from "react-router-dom";
import RandomGroup from "../Page/RandomGroup";


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mang_gio_hang: [],
      
    };
    
  }



  


  render() {
    return (
      <div>
        
          <Routes>
            <Route path="/" element={<TrangChu/>} />
            <Route path="/gio-hang" element={<GioHang/>} />
            <Route path="/random" element={<RandomGroup/>} />
          </Routes>
  
        <Cart CartItems={this.state.mang_gio_hang}></Cart>
      </div>
    );
  }
}

export default Content;
