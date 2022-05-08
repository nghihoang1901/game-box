import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="contact">
          <div className="container">
            <div className="contact-head">
              <h2>Contact</h2>
              <form>
                <div className="col-md-6 contact-left">
                  <input
                    type="text"
                    className="text"
                    value="Name"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Name';}"
                  />
                  <input
                    type="text"
                    className="text"
                    value="Email"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Email';}"
                  />
                  <input
                    type="text"
                    className="text"
                    value="Phone"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Phone';}"
                  />
                </div>
                <div className="col-md-6 contact-right">
                  <textarea
                    value="Message"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Message';}"
                  >
                    Message
                  </textarea>
                  <input type="submit" value="SEND" />
                </div>
                <div className="clearfix"></div>
              </form>
            </div>
            <div className="contact-map">
              <iframe
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12386182.960956775!2d-74.08302114251626!3d40.71866701702417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1436524193425"}
                frameborder="0"
                style={"border:0"}
                allowfullscreen
               />
            </div>
            <div className="address">
              <h3>Our Locations</h3>
              <div className="locations">
                <ul>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <div className="address-info">
                      <h4>New York, Washington</h4>
                      <p>10-765 MD-Road</p>
                      <p>Washington, DC, United States,</p>
                      <p>Phone: 123 456 7890</p>
                      <p>
                        Mail:{" "}
                        <a href="mailto:info@example.com">
                          info(at)example.com
                        </a>
                      </p>
                      <h5>
                        <a href="">Visit on Google Maps </a>
                      </h5>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <div className="address-info">
                      <h4>London, UK</h4>
                      <p>10-765 MD-Road</p>
                      <p>Lorem ipsum, domon sit, UK,</p>
                      <p>Phone: 123 456 7890</p>
                      <p>
                        Mail:{" "}
                        <a href="mailto:info@example.com">
                          info(at)example.com
                        </a>
                      </p>
                      <h5>
                        <a href="">Visit on Google Maps </a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
