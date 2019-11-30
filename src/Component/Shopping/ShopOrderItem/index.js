import React, { Component } from 'react';
import "./style.css"
import "../../../bootstrap-3.3.7-dist/css/bootstrap.min.css"

class ShopOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
        this.getProductNum = this.getProductNum.bind(this);
        this.sendShopData = this.sendShopData.bind(this);
    }

    getProductNum(e) {
        this.setState({
            num: e.target.value
        })
    }

    sendShopData() {
        const { pic, name, unit, price, discount, barcode } = this.props.data
        const { num } = this.state
        const data = { pic, name, unit, price, discount, barcode, num }
        this.props.onSendData(data)
        alert(`${name}${num}${unit}加入购物车`)
    }

    render() {
        const { pic, name, unit, price, discount, barcode, num } = this.props.data;
        return (
            <div className="OrderItem">

                <div className="OrderItem__picContainer">
                    <img src={pic} className="OrderItem__pic" />
                </div>

                <div className="OrderItem__detail">
                    <div className="OrderItem__name">商品名称：{name}</div>
                    <div className="OrderItem__unit">单位：{unit}</div>
                    <div className="OrderItem__price">单价：{price}</div>
                    <div className="OrderItem__discount">折扣：{discount}</div>
                </div>

                <div className="OrderItem__btn">
                    <div className="form-group">
                        <select className="form-control" onChange={this.getProductNum}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.sendShopData}>购买{this.state.num}个</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopOrderItem;