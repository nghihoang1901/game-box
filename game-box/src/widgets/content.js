import React, { Component } from "react";
import LatestGame from "./LatestGame";
import ListGame from "./ListGame";
import Poster from "./Poster";
import Xbox from "./Xbox";
import Cart from "../Module/cart";
import FormCart from "../Module/FormCart";


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mang_gio_hang: [],
      showOrHideItemCart: false
    };
    
  }



  addToCart = (item) => {
    let mang = this.state.mang_gio_hang;
    if (mang) {
      let Flag = 0;
      for (var i = 0; i < mang.length; i++) {
        if (mang[i].id === item.id) {
          mang[i].quantity += 1;
          Flag = 1;
        }
      }
      if (Flag === 0) {
        item.quantity = 1;
        mang.push(item);
      }
    } else {
      item.quantity = 1;
      mang.push(item);
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
  };

  DescreaseItemCart = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (mang[i].id === item.id) {
        if (mang[i].quantity > 1) {
          mang[i].quantity -= 1;
        }else {
          
          if(window.confirm("Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không") === true){
            mang.splice(i,1);
          }
          else{
            //do nothing
          }             
        }
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
  }

  DeleteItem = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (mang[i].id === item.id) {
        if(window.confirm("Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không") === true){
          mang.splice(i,1);
        }
        else{
          //do nothing
        }   
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
  }


  render() {
    return (
      <div>
        <ListGame handleAddToCart={this.addToCart}></ListGame>
        <Cart CartItems={this.state.mang_gio_hang}></Cart>
        <FormCart
          CartItems={this.state.mang_gio_hang}
          handleAddToCart={this.addToCart}
          handleDescreaseItemCart={this.DescreaseItemCart}
          handleDeleteItem={this.DeleteItem}
          
        ></FormCart>
        <LatestGame></LatestGame>
        <Poster></Poster>
        <Xbox></Xbox>
      </div>
    );
  }
}

export default Content;
