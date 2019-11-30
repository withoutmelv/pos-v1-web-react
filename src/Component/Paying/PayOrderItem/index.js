import React, { Component } from 'react';

class PayOrderItem extends Component {
    render() {
        const { pic, name, unit, price, discount, barcode, num } = this.props.data
        return (
            <div className="OrderItem">
                <div className="OrderItem__picContainer">
                    <img className="OrderItem__pic" src={pic} />
                </div>
                <div className="OrderItem__detail">
                    <div className="OrderItem__name">名称：{name}</div>
                    <div className="OrderItem__unit">单位：{unit}</div>
                    <div className="OrderItem__price">单价：{price}</div>
                    <div className="OrderItem__discount">折扣：{discount}</div>
                    <div className="OrderItem__barcode">条形码：{barcode}</div>
                    <div className="OrderItem__num">数量：{num}</div>
                </div>
            </div>
        );
    }
}

export default PayOrderItem;