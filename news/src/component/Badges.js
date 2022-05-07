import React, { Component } from "react";

class Badges extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div class="pages">
          <div class="container">
            <div class="appearance">
              <h3 class="ghj">Badges</h3>
              <div class="col-md-6">
                <p>Add modifier classes to change the appearance of a badge.</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th width="50%">Classes</th>
                      <th width="50%">Badges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>No modifiers</td>
                      <td>
                        <span class="badge">42</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-primary</code>
                      </td>
                      <td>
                        <span class="badge badge-primary">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-success</code>
                      </td>
                      <td>
                        <span class="badge badge-success">22</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-info</code>
                      </td>
                      <td>
                        <span class="badge badge-info">30</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-warning</code>
                      </td>
                      <td>
                        <span class="badge badge-warning">412</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-danger</code>
                      </td>
                      <td>
                        <span class="badge badge-danger">999</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-6">
                <p>
                  Easily highlight new or unread items with the{" "}
                  <code>.badge</code> class
                </p>
                <div class="list-group list-group-alternate">
                  <a href="#" class="list-group-item">
                    <span class="badge">201</span> <i class="ti ti-email"></i>{" "}
                    Inbox{" "}
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="badge badge-primary">5021</span>{" "}
                    <i class="ti ti-eye"></i> Profile visits{" "}
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="badge">14</span>{" "}
                    <i class="ti ti-headphone-alt"></i> Call{" "}
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="badge">20</span> <i class="ti ti-comments"></i>{" "}
                    Messages{" "}
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="badge badge-warning">14</span>{" "}
                    <i class="ti ti-bookmark"></i> Bookmarks{" "}
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="badge badge-danger">30</span>{" "}
                    <i class="ti ti-bell"></i> Notifications{" "}
                  </a>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
