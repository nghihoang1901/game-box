import React, { Component } from "react";

class ItemFormCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleAddToCartProcess = () => {
    this.props.handleAddToCart(this.props.ItemCart);
  };
  handleDescreaseItemCartProcess = () => {
    this.props.handleDescreaseItemCart(this.props.ItemCart);
  };
  handleDeleteItemProcess = () => {
    this.props.handleDeleteItem(this.props.ItemCart);
  }

  render() {


    return (
      <tr>
        <td>{this.props.ItemCart.id}</td>
        <td>
          <img src={this.props.ItemCart.image} />
        </td>
        <td>{this.props.ItemCart.name}</td>
        <td className="button">
          <button
            type="button"
            onClick={this.handleDescreaseItemCartProcess}
            class="btn btn-default"
          >
            -
          </button>
          {this.props.ItemCart.quantity}
          <button
            type="button"
            onClick={this.handleAddToCartProcess}
            class="btn btn-default"
          >
            +
          </button>
          <button 
              onClick={this.handleDeleteItemProcess}         
            type="button"
            className={"btn btn-danger "}           
          >
            <i className={"bi bi-trash " + this.showOrHideItem}></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default ItemFormCart;
