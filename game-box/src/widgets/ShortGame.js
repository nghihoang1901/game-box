import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShortGame extends Component {
  constructor(props) {
    super(props);
  }

  handleAddToCartProcess = () => {
    this.props.handleAddToCart(this.props.game);
  };

  render() {
    return (
      <li>
        <div className="game-grid">
          <h4>{this.props.game.typegame}</h4>
          <p>{this.props.game.name}</p>
          <img src={this.props.game.image} className="img-responsive" alt="" />
          <div className="mask_interface"></div>
          <Link to={"/product/" + this.props.game.id}>
            <div className="btn_view_detail">
              <button type="button" class="btn btn-success">
                xem chi tiết
              </button>
            </div>
          </Link>
          <button
            type="button"
            onClick={this.handleAddToCartProcess}
            className={"btn btn-info btn_add_to_cart "}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </li>
    );
  }
}

export default ShortGame;
