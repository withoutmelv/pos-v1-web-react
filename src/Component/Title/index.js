import React, { Component } from 'react';
import '../../bootstrap-3.3.7-dist/css/bootstrap.min.css'
class Title extends Component {
    render() {
        return (
            <div className="Title">
                {
                    this.props.state?<h1 className="Title__name">商城</h1>:<h1 className="Title__name">购物车</h1>
                }
                
            </div>
        );
    }
}

export default Title;