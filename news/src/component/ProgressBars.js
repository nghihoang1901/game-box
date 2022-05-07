import React, { Component } from "react";

class ProgressBars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="pages">
          <div className="container">
            <div className="progress-bars ">
              <h3 className="ghj">Progress Bars</h3>
              <div className="tab-content " >
                <div className="tab-pane active " id="domprogress">
                  <div className="progress ">
                    <div
                    // progress-bar-primary
                      className="progress-bar  "
                      style="width: 20%"
                    ></div>
                  </div>
                  <p>
                    Info with <code>progress-bar-info</code> className.
                  </p>
                  <div className="progress ">
                    <div
                    // progress-bar-info
                      className="progress-bar  "
                      style="width: 60%"
                    ></div>
                  </div>
                  <p>
                    Success with <code>progress-bar-success</code> className.
                  </p>
                  <div className="progress ">
                    <div
                    // progress-bar-success
                      className="progress-bar  "
                      style="width: 30%"
                    ></div>
                  </div>
                  <p>
                    Warning with <code>progress-bar-warning</code> className.
                  </p>
                  <div className="progress ">
                    <div
                      className="progress-bar  "
                      style="width: 70%"
                    ></div>
                  </div>
                  <p>
                    Danger with <code>progress-bar-danger</code> className.
                  </p>
                  <div className="progress ">
                    <div
                      className="progress-bar progress-bar-danger "
                      style="width: 50%"
                    ></div>
                  </div>
                  <p>
                    Inverse with <code>progress-bar-inverse</code> className.
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-inverse "
                      style="width: 40%"
                    ></div>
                  </div>
                  <p>
                    Inverse with <code>progress-bar-inverse</code> className.
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-success "
                      style="width: 35%"
                    >
                      <span className="sr-only">35% Complete (success)</span>
                    </div>
                    <div
                      className="progress-bar progress-bar-warning "
                      style="width: 20%"
                    >
                      <span className="sr-only ">20% Complete (warning)</span>
                    </div>
                    <div
                      className="progress-bar progress-bar-danger "
                      style="width: 10%"
                    >
                      <span className="sr-only">10% Complete (danger)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBars;
