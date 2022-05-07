import React, { Component } from "react";

class ComentForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="blog">
          <div class="container">
            <div class="col-md-8 blog-left">
              <div class="blog-info">
                <div class="coment-form">
                  <h4>Leave your comment</h4>
                  <form>
                    <input
                      type="text"
                      value="Name "
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Name';}"
                      required=""
                    />
                    <input
                      type="text"
                      value="Subject "
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Subject';}"
                      required=""
                    />
                    <input
                      type="text"
                      value="Email (will not be published)*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Email (will not be published)*';}"
                      required=""
                    />
                    <textarea
                      type="text"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Your Comment...';}"
                      required=""
                    >
                      Your Comment...
                    </textarea>
                    <input type="submit" value="SUBMIT" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

export default ComentForm;
