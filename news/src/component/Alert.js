import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="pages">
          <div class="container">
            <div class="alerts">
              <h3 class="ghj">Alerts</h3>
              <div class="alert alert-success" role="alert">
                <strong>Well done!</strong> You successfully read this important
                alert message.
              </div>
              <div class="alert alert-info" role="alert">
                <strong>Heads up!</strong> This alert needs your attention, but
                it's not super important.
              </div>
              <div class="alert alert-warning" role="alert">
                <strong>Warning!</strong> Best check yo self, you're not looking
                too good.
              </div>
              <div class="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try
                submitting again.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
