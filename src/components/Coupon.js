import React, { Component } from 'react';

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResult: false
        }
        this.showResult = this.showResult.bind(this); // es6 option also possible
    }

    showResult() {
        this.setState({
            showResult: !this.state.showResult
        });
    }
    render(){
        return <div className="show-coupon">
        <p class="coupon-desc">Please enter the 19-digit number and code from your gift card below.</p>
        {this.state.showResult ?
        <div className="result">
            <div className="result-left">
                <p>Gift card</p>
                <p>**** **** **** **** 123</p>
            </div>
            <div className="result-right">
                <p>-$20.00</p>
            </div>
        </div>
        : null }
        <div className="gift-number">
            <input placeholder="Gift Card Number" /><input placeholder="Control Code" />
        </div>
    </div>
    }
}

export default Coupon;