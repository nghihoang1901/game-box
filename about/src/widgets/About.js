import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="about">
          <div class="container">
            <h2>About</h2>
            <div class="about-info-grids">
              <div class="col-md-5 abt-pic">
                <img src="images/abt.jpg" class="img-responsive" alt="" />
              </div>
              <div class="col-md-7 abt-info-pic">
                <h3>
                  Vestibulum congue neque quis ex fringilla, in pellentesque
                  massa gravida.
                </h3>
                <p>
                  Mauris tempus lorem nec ex facilisis suscipit. Phasellus
                  pretium rutrum augue, eu rutrum lacus lobortis rutrum. Etiam a
                  sem et velit sollicitudin placerat. Maecenas tincidunt justo
                  ligula, sit amet maximus dolor iaculis quis. Sed laoreet
                  cursus posuere. Pellentesque commodo odio in luctus interdum.
                </p>
                <ul>
                  <li>Proin et ligula ut nulla laoreet posuere.</li>
                  <li>Sed vestibulum magna vel egestas feugiat.</li>
                  <li>Curabitur nec erat eu lorem gravida aliquet.</li>
                </ul>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
