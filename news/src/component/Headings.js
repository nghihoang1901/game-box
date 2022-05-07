import React, { Component } from "react";

class Headings extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="pages">
          <div class="container">
            <h2 class="top">Typography</h2>
            <div class="headdings">
              <h3 class="ghj">Headings</h3>
              <div class="bs-example">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <h1 id="h1.-bootstrap-heading">
                          h1. Bootstrap heading
                          <a
                            class="anchorjs-link"
                            href="#h1.-bootstrap-heading"
                          >
                            <span class="anchorjs-icon"></span>
                          </a>
                        </h1>
                      </td>
                      <td class="type-info">Semibold 36px</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 id="h2.-bootstrap-heading">
                          h2. Bootstrap heading
                          <a
                            class="anchorjs-link"
                            href="#h2.-bootstrap-heading"
                          >
                            <span class="anchorjs-icon"></span>
                          </a>
                        </h2>
                      </td>
                      <td class="type-info">Semibold 30px</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 id="h3.-bootstrap-heading">
                          h3. Bootstrap heading
                          <a
                            class="anchorjs-link"
                            href="#h3.-bootstrap-heading"
                          >
                            <span class="anchorjs-icon"></span>
                          </a>
                        </h3>
                      </td>
                      <td class="type-info">Semibold 24px</td>
                    </tr>
                    <tr>
                      <td>
                        <h4 id="h4.-bootstrap-heading">
                          h4. Bootstrap heading
                          <a
                            class="anchorjs-link"
                            href="#h4.-bootstrap-heading"
                          >
                            <span class="anchorjs-icon"></span>
                          </a>
                        </h4>
                      </td>
                      <td class="type-info">Semibold 18px</td>
                    </tr>
                    <tr>
                      <td>
                        <h5 id="h5.-bootstrap-heading">
                          h5. Bootstrap heading
                          <a
                            class="anchorjs-link"
                            href="#h5.-bootstrap-heading"
                          >
                            <span class="anchorjs-icon"></span>
                          </a>
                        </h5>
                      </td>
                      <td class="type-info">Semibold 14px</td>
                    </tr>
                    <tr>
                      <td>
                        <h6>h6. Bootstrap heading</h6>
                      </td>
                      <td class="type-info">Semibold 12px</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Headings;
