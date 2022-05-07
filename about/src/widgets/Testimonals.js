import React, { Component } from "react";

class Testimonals extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="about">
          <div class="container">
          <div class="testimonals">
				<h3>Testimonals</h3>
				<div class="testimonal-grids">
					 <div class="col-md-4 testimonal-grid">
						 <div class="testi-info">
						 <p>""..Mauris congue, dolor at vehicula scelerisque, enim odio vehicula turpis, vitae luctus dolor nisi eget est. Aliquam maximus felis eget varius mattis. Quisque tristique nibh imperdiet dignissim molestie.""</p>
						 <h4>Mark Johnson</h4>
						 <a href="mailto:example@gmail.com">http://www.example.com</a>
						 </div>
					 </div>
					 <div class="col-md-4 testimonal-grid">
						 <div class="testi-info">
						 <p>""..Mauris congue, dolor at vehicula scelerisque, enim odio vehicula turpis, vitae luctus dolor nisi eget est. Aliquam maximus felis eget varius mattis. Quisque tristique nibh imperdiet dignissim molestie.""</p>
						 <h4>Wiiams Deo</h4>
						 <a href="mailto:example@gmail.com">http://www.example.com</a>
						 </div>
					 </div>
					 <div class="col-md-4 testimonal-grid">
						 <div class="testi-info">
						 <p>""..Mauris congue, dolor at vehicula scelerisque, enim odio vehicula turpis, vitae luctus dolor nisi eget est. Aliquam maximus felis eget varius mattis. Quisque tristique nibh imperdiet dignissim molestie.""</p>
						 <h4>Mark Johnson</h4>
						 <a href="mailto:example@gmail.com">http://www.example.com</a>
						 </div>
					 </div>
					 <div class="clearfix"></div>
				</div>
		   </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonals;
