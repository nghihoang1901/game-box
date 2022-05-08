import React, { Component } from "react";
import ItemFormCart from "./ItemFormCart";

class FormCart extends Component {
  constructor(props) {
    super(props);
  }

  handleRemoveCartProcess = () => {
    this.props.handleRemoveCart();
  };

  render() {
    return (
      <div>
        <div class="table-responsive">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hình</th>
                <th>Tên Sản Phẩm</th>
                <th>Số Lượng</th>
              </tr>
            </thead>
            <tbody>
              {this.props.CartItems.map((ItemCart) => {
                return (
                  <ItemFormCart
                    ItemCart={ItemCart}
                    handleAddToCart={this.props.handleAddToCart}
                    handleDescreaseItemCart={this.props.handleDescreaseItemCart}
                    handleDeleteItem={this.props.handleDeleteItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="action">
          <button
            type="button"
            onClick={this.handleRemoveCartProcess}
            class="btn btn-danger"
          >
            Hủy toàn bộ giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default FormCart;
