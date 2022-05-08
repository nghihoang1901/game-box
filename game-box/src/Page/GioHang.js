import React, { Component } from 'react';
import FormCart from "../Module/FormCart";

class GioHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang_gio_hang: [],
            
          };
    }
    
    
    render() { 
        return (  
            <div>
                <FormCart
                CartItems={this.props.mang_gio_hang}
                handleAddToCart={this.props.handleAddToCart}
                handleDescreaseItemCart={this.props.handleDescreaseItemCart}
                handleDeleteItem={this.props.handleDeleteItem}
                handleRemoveCart={this.props.handleRemoveCart}
                ></FormCart>
            </div>
        );
    }
}
 
export default GioHang;