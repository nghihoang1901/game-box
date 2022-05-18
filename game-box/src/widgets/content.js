import React, { Component } from "react";
import DetailProduct from "../Page/DetailProduct";
import TrangChu from "../Page/TrangChu";
import Cart from "../Module/cart";
import GioHang from "../Page/GioHang";
import { Routes, Route } from "react-router-dom";
import RandomGroup from "../Page/RandomGroup";
import DsProducts from "../Page/DSProducts";
import ManageProduct from "../Page/manageProduct";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mang_gio_hang: [],
      so_luong_gio_hang: 0,
      listgame: [
        {
          id: 1,
          typegame: "Action Games",
          name: "Nulla elementum nunc tempus.",
          image: "images/t1.jpg",
        },
        {
          id: 2,
          typegame: "Racing Games",
          name: "Nulla elementum nunc tempus.",
          image: "images/t3.jpg",
        },
        {
          id: 3,
          typegame: "3D Games",
          name: "Nulla elementum nunc tempus.",
          image: "images/t4.jpg",
        },
        {
          id: 4,
          typegame: "Arcade Games",
          name: "Nulla elementum nunc tempus.",
          image: "images/t2.jpg",
        },
      ],
    };
  }

  componentDidMount() {
    let data_string_mang_gio_hang = localStorage.getItem("cart");
    if (
      data_string_mang_gio_hang &&
      data_string_mang_gio_hang !== "undefined" &&
      data_string_mang_gio_hang !== null
    ) {
      let mang = JSON.parse(data_string_mang_gio_hang);
      this.setState((prevState) => {
        prevState.mang_gio_hang = mang;
        var tong_so_luong = 0;
        for (var i = 0; i < mang.length; i++) {
          tong_so_luong += mang[i].quantity;
        }
        prevState.so_luong_gio_hang = tong_so_luong;
        return prevState;
      });
    }
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
    this.saveCartIntoLocalStorage(mang);
    this.countNumberQuantityInCart(mang);
  };

  DescreaseItemCart = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (mang[i].id === item.id) {
        if (mang[i].quantity > 1) {
          mang[i].quantity -= 1;
        } else {
          if (
            window.confirm(
              "Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không"
            ) === true
          ) {
            mang.splice(i, 1);
          } else {
            //do nothing
          }
        }
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
    this.saveCartIntoLocalStorage(mang);
    this.countNumberQuantityInCart(mang);
  };

  DeleteItem = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (mang[i].id === item.id) {
        if (
          window.confirm(
            "Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không"
          ) === true
        ) {
          mang.splice(i, 1);
        } else {
          //do nothing
        }
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
    this.saveCartIntoLocalStorage([]);
    this.countNumberQuantityInCart([]);
  };

  saveCartIntoLocalStorage = (mang_gio_hang) => {
    let data_save = JSON.stringify(mang_gio_hang);
    localStorage.setItem("cart", data_save);
  };

  countNumberQuantityInCart = (mang) => {
    var tong_so_luong = 0;

    for (var i = 0; i < mang.length; i++) {
      tong_so_luong += mang[i].quantity;
    }

    this.setState((prevState) => {
      prevState.so_luong_gio_hang = tong_so_luong;
      return prevState;
    });
  };
  RemoveCart = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (mang[i].id === item.id) {
        if (
          window.confirm(
            "Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không"
          ) === true
        ) {
          mang.splice(i, 1);
        } else {
          //do nothing
        }
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
    this.saveCartIntoLocalStorage([]);
    this.countNumberQuantityInCart([]);
  };

  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<TrangChu handleAddToCart={this.addToCart} />}
          />
          <Route
            path="/gio-hang"
            element={
              <GioHang
                mang_gio_hang={this.state.mang_gio_hang}
                handleAddToCart={this.addToCart}
                handleDescreaseItemCart={this.DescreaseItemCart}
                handleDeleteItem={this.DeleteItem}
                handleRemoveCart={this.RemoveCart}
              />
            }
          />
          <Route path="/random" element={<RandomGroup />} />
          <Route
            path="/product/:id_product"
            element={<DetailProduct danhsachgame={this.state.listgame} />}
          />
          <Route path="/products" element={<DsProducts />} />
          <Route path="admin/products" element={<ManageProduct />} />
        </Routes>

        <Cart
          CartItems={this.state.mang_gio_hang}
          TongSoLuong={this.state.so_luong_gio_hang}
        ></Cart>
      </div>
    );
  }
}

export default Content;
