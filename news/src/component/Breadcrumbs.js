import React, { Component } from "react";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="pages">
          <div class="container">
            <div class="bread-crumbs">
              <h3 class="ghj">Breadcrumbs</h3>
              <ol class="breadcrumb">
                <li class="active">Home</li>
              </ol>
              <ol class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="active">Library</li>
              </ol>
              <ol class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Library</a>
                </li>
                <li class="active">Data</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;
