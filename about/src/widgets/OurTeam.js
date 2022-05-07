import React, { Component } from "react";

class OurTeam extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div class="about">
        <div class="container">
        <div class="team">
			  <h3>Our Team</h3>	  
			  <div class="grid_4">
				<div class="team-grid">
						   <img src="images/a1.jpg" alt="" />
						   <h4>Phasellus scipitilifen lus.</h4>
						  <p>Kuspendisse laoreet augue iderti wer  interdum merti oremolo lectusto odio, sedorolu fringilla estero libero. </p>
					  </div>
			  </div>
			  <div class="grid_4">
				 <div class="team-grid">
						   <img src="images/a2.jpg" alt="" />
						   <h4>Phasellus scipitilifen lus.</h4>
						  <p>Kuspendisse laoreet augue iderti wer  interdum merti oremolo lectusto odio, sedorolu fringilla estero libero. </p>
					  </div>
			  </div>
			  <div class="grid_4 span66">
				<div class="team-grid">
						   <img src="images/a3.jpg" alt="" />
						   <h4>Phasellus scipitilifen lus.</h4>
						  <p>Kuspendisse laoreet augue iderti wer  interdum merti oremolo lectusto odio, sedorolu fringilla estero libero. </p>
					  </div>
			  </div>      
			  <div class="grid_4">				 
					  <div class="team-grid">
						   <img src="images/a4.jpg" alt="" />
						   <h4>Phasellus scipitilifen lus.</h4>
						  <p>Kuspendisse laoreet augue iderti wer  interdum merti oremolo lectusto odio, sedorolu fringilla estero libero. </p>
					  </div>					  
			 </div>
			 <div class="clearfix"></div> 
		  </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
