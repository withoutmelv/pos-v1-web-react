import React, { Component } from 'react';
import ShopOrderItem from '../ShopOrderItem';
class ShopOrderList extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
        this.onSubmitData = this.onSubmitData.bind(this);
    }
    componentDidMount(){
        fetch('/mock/orders.json').then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    this.setState({
                        data
                    })
                })
            }
        })
    }
    onSubmitData(data){
        this.props.onHandleData(data)
    }
    render() {
        //const data={pic:pic,name:"游戏鼠标",unit:"1个",price:439,discount:"无折扣",barcode:"ITEM01"}
        return (
            <div>
                {
                    this.state.data.map(item=>{
                        return <ShopOrderItem key={item.id} data={item} onSendData={this.onSubmitData}/>
                    })
                }
                
            </div>
        );
    }
}

export default ShopOrderList;