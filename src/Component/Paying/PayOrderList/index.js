import React, { Component } from 'react';
import PayOrderItem from '../PayOrderItem'
import "../../../bootstrap-3.3.7-dist/css/bootstrap.min.css"
import printInventory from "../PrintInventory"

var items=[];
var promotions=[];
class PayOrderList extends Component {
    constructor(props) {
        super(props);
        this.state={
            shoppingList:'',
        }
        this.calcPrice = this.calcPrice.bind(this);
    }

    componentDidMount() {
        fetch('/mock/orders.json').then(res => {
            if (res.ok) {
                res.json().then(item => {
                    items=item
                })
            }
        })

        fetch('/mock/promotion.json').then(res => {
            if (res.ok) {
                res.json().then(promotion => {
                    promotions=promotion
                })
            }
        })

        
    }


    calcPrice(){
        var inputs=[];
        this.props.data.map(item=>{
            for(var i=0;i<item.num;i++){
                inputs.push(item.barcode)
            }
        })
        this.setState({
            shoppingList:printInventory(inputs,items,promotions)
        })
        const {shoppingList}=this.state
        this.props.showShopList(shoppingList)
    }
    render() {
        return (
            <div>
                {
                    this.props.data.map(item=>{
                        return <PayOrderItem key={item.id} data={item} />
                    })
                }
                <button className="btn btn-lg btn-primary" onClick={this.calcPrice}>结算</button>
            </div>
        );
    }
}

export default PayOrderList;