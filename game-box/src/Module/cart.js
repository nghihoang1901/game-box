import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container_cart">
        <div className="icon_gio_hang">
          <img src="../images/gio_hang.jpg" />
        </div>
        <div className="danh_sach_item_gio_hang">
          {this.props.CartItems.map((ItemCart) => {
            return (
              <div className="item_gio_hang">
                <div className="hinh_san_pham">
                  <img src={ItemCart.image} />
                </div>
                <div className="thong_tin_rut_gon_san_pham">
                  <div className="ten_san_pham">{ItemCart.name}</div>
                  <div className="so_luong">{ItemCart.quantity}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
