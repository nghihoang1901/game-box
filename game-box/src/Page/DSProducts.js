import React, { Component } from "react";
const axios = require("axios").default;

class DsProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ds_sp: [],
      so_trang: 0
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/products?page=0")
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
      .then(function () 
      {});

      axios.get("http://localhost:4000/products/total-page")
      .then((response) => {
        // console.log(response);
        this.setState((preState) => {
          preState.so_trang = response.data.so_trang;
          return preState;
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {});
  }

  handleChangePage = (e) => {
    // console.log(e.target.getAttribute('data-page'));
    let page_chose = e.target.getAttribute('data-page')
    axios
      .get("http://localhost:4000/products?page=" + page_chose)
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

    let ds_trang= [];
    for(var i = 0 ; i< this.state.so_trang; i++){
      ds_trang.push(i);
    }

    return (
      <div>
        <div>Trang danh sách sản phẩm
        {this.state.so_trang}
        </div>        
        <div>
          {this.state.ds_sp.map((itemProducts) => {
            return (
              <div>
                {itemProducts.id} - {itemProducts.ten_sach}{" "}
              </div>
            );
          })}
        </div>
        <div className="phan_trang">          
          <button type="button" class="btn btn-primary">first</button>
          <button type="button" class="btn btn-primary">prev</button>
          <div className="ds_trang">
            {
              ds_trang.map(item_trang => {
                return <button type="button" onClick={this.handleChangePage} data-page = {item_trang} class="btn btn-primary">{item_trang + 1}</button>
              })
            }
          </div>
          <button type="button" class="btn btn-primary">next</button>
          <button type="button" class="btn btn-primary">last</button>  
        </div>
      </div>
    );
  }
}

export default DsProducts;
