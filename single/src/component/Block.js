import React, { Component } from "react";

class BlockInforText extends Component {
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
                <div class="blog-info-text">
                  <div class="blog-img">
                    <img src="images/img12.jpg" alt="" />
                  </div>
                  <p class="snglp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div class="comment-icons">
                  <ul>
                    <li>
                      <span></span>
                      <a href="#">Lorem ipsum dolor sit</a>{" "}
                    </li>
                    <li>
                      <span class="clndr"></span>MARCH 1, 2013
                    </li>
                    <li>
                      <span class="admin"></span> <a href="#">Admin</a>
                    </li>
                    <li>
                      <span class="cmnts"></span> <a href="#">5 comments</a>
                    </li>
                    <li>
                      <a href="#" class="like">
                        15
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 single-page-right">
              <div class="category blog-ctgry">
                <h4>Top Games</h4>
                <div class="list-group">
                  <a href="single.html" class="list-group-item">
                    Cras justo odio
                  </a>
                  <a href="single.html" class="list-group-item">
                    Dapibus ac facilisis in
                  </a>
                  <a href="single.html" class="list-group-item">
                    Morbi leo risus
                  </a>
                  <a href="single.html" class="list-group-item">
                    Porta ac consectetur ac
                  </a>
                  <a href="single.html" class="list-group-item">
                    Vestibulum at eros
                  </a>
                  <a href="single.html" class="list-group-item">
                    Cras justo odio
                  </a>
                  <a href="single.html" class="list-group-item">
                    Cras justo odio
                  </a>
                  <a href="single.html" class="list-group-item">
                    Cras justo odio
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 single-page-right">
              <div class="recent-posts">
                <h4>Recent posts</h4>
                <div class="recent-posts-info">
                  <div class="posts-left sngl-img">
                    <a href="single.html">
                      {" "}
                      <img
                        src="images/img16.jpg"
                        class="img-responsive zoom-img"
                        alt=""
                      />{" "}
                    </a>
                  </div>
                  <div class="posts-right">
                    <label>March 5, 2015</label>
                    <h5>
                      <a href="single.html">Finibus Bonorum</a>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      incididunt.
                    </p>
                    <a
                      href="single.html"
                      class="btn btn-primary hvr-rectangle-in"
                    >
                      Read More
                    </a>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="recent-posts-info">
                  <div class="posts-left sngl-img">
                    <a href="single.html">
                      {" "}
                      <img
                        src="images/img17.jpg"
                        class="img-responsive zoom-img"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="posts-right">
                    <label>March 1, 2015</label>
                    <h5>
                      <a href="single.html">Finibus Bonorum</a>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      incididunt.
                    </p>
                    <a
                      href="single.html"
                      class="btn btn-primary hvr-rectangle-in"
                    >
                      Read More
                    </a>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockInforText;
