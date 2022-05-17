import React, { Component } from "react";
const axios = require("axios").default;

class DsProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ds_sp: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        // console.log(response);
        this.setState((preState) => {
          preState.ds_sp = response.data;
          return preState;
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {});
  }

  render() {
    return (
      <div>
        <div>Trang danh sách sản phẩm</div>
        <div>
          {this.state.ds_sp.map((itemProducts) => {
            return (
              <div>
                {itemProducts.id} - {itemProducts.ten_sach}{" "}
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
}

export default DsProducts;
