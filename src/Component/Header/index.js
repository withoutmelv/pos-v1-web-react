import React, { Component } from 'react';
import ShopOrderList from "../Shopping/ShopOrderList"
import PayOrderList from "../Paying/PayOrderList"
import Title from '../Title'
import "./style.css"
import "../../bootstrap-3.3.7-dist/css/bootstrap.min.css"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            change:true,
            data:[],
            shoppingList:'',
        }
        this.changeState = this.changeState.bind(this);
        this.dataToShopCart = this.dataToShopCart.bind(this);
        this.showList = this.showList.bind(this);
    }
    
    changeState(){
        this.setState({
            change:!this.state.change,
        })
    }

    dataToShopCart(dota){
        this.setState({
            data:[...this.state.data,dota],
        })
    }

    showList(shoppingList){
        this.setState({
            shoppingList:shoppingList
        })
    }

    render() {
        return (
            <div>
                <Title state={this.state.change}/>
                {
                    this.state.change?<ShopOrderList onHandleData={this.dataToShopCart}/>:<PayOrderList data={this.state.data} showShopList={this.showList}/>
                }
                {
                    this.state.change?<button className="btn btn-lg btn-primary pull-right" onClick={this.changeState}>进入购物车</button>: <button className="btn btn-lg btn-primary pull-right" onClick={this.changeState}>进入商城</button>
                }
                <div className="shoppingList">
                    {
                        this.state.change?<div></div>:this.state.shoppingList!=""?<pre>
                        {this.state.shoppingList}
                        </pre>:<div></div>
                    }
                    
                </div>
            </div>
        );
    }
}

export default Header;