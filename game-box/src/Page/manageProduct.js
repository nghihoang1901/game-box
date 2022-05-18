import axios from "axios";
import React, { Component, createRef } from "react";
import DsProducts from "./DSProducts";

class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten_sach: "",
      don_gia: "",
      notice_message: "",
      ShowNotice: false,
    };
    this.handleHideOrShowPopupAddnew = this.handleHideOrShowPopupAddnew.bind(this);
    this.buttonShowHidePopupNotice = React.createRef();
    this.buttonShowHidePopupAddnew = React.createRef();
  }

  componentDidMount() {
    // this.buttonShowHidePopupNotice.current.click();
  }

  handleChangeInput = (e) => {
    this.setState((prevState) => {
      prevState[e.target.name] = e.target.value;
      return prevState;
    });
  };

  handleHideOrShowPopupAddnew = (notice_message) => {
    this.setState((prevState) => {
      prevState.notice_message = notice_message;
      return prevState;
    });
    this.buttonShowHidePopupNotice.current.click();
    setTimeout(() => {
      this.buttonShowHidePopupAddnew.current.click();
    }, 200);
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.ten_sach, this.state.don_gia);

    axios
      .post("http://localhost:4000/product", {
        ten_sach: this.state.ten_sach,
        don_gia: this.state.don_gia,
      })
      .then((response) => {
        this.handleHideOrShowPopupAddnew("Thêm sách mới thành công");
        window.location.reload(false);
        console.log(response);
      })
      .catch((error) => {
        this.handleHideOrShowPopupAddnew("Có lỗi xảy ra trong quá trình thêm");
        console.log(error);
      })
      .then(function () {});
  };

  handleClosePopupNotice = () => {
    this.setState((prevState) => {
      prevState.notice_message = "";
      return prevState;
    });
  };

  render() {
    return (
      <div>
        <a
          class="btn btn-primary"
          ref={this.buttonShowHidePopupAddnew}
          data-toggle="modal"
          href="#modal-addnew"
        >
          Thêm sách mới
        </a>
        <div class="modal fade" id="modal-addnew">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4 class="modal-title">Modal title</h4>
              </div>
              <form onSubmit={this.handleSubmitForm}>
                <div class="modal-body">
                  <legend>Thêm sản phẩm</legend>

                  <div class="form-group">
                    <label for="">Tên sách</label>
                    <input
                      type="text"
                      onChange={this.handleChangeInput}
                      value={this.state.ten_sach}
                      name="ten_sach"
                      class="form-control"
                      id=""
                      placeholder="Input field"
                    />
                  </div>

                  <div class="form-group">
                    <label for="">Đơn giá</label>
                    <input
                      type="text"
                      onChange={this.handleChangeInput}
                      value={this.state.don_gia}
                      name="don_gia"
                      class="form-control"
                      id=""
                      placeholder="Input field"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <a
          class="btn btn-primary"
          ref={this.buttonShowHidePopupNotice}
          data-toggle="modal"
          href="#modal-notice"
          style={{ display: "none" }}
        >
          Trigger modal
        </a>
        <div class="modal fade" id="modal-notice">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4 class="modal-title">Thông báo</h4>
              </div>
              <div class="modal-body">{this.state.notice_message}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <DsProducts />
      </div>
    );
  }
}

export default ManageProduct;
