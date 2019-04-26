import React, { Component } from 'react';

class Coupon extends Component {
    render(){
        return <div className="show-coupon">
        <p class="coupon-desc">Please enter the 19-digit number and code from your gift card below.</p>
        <div className="result">
            <div className="result-left">
                <p>Gift card</p>
                <p>**** **** **** **** 123</p>
            </div>
            <div className="result-right">
                <p>-$20.00</p>
            </div>
        </div>
        <div className="gift-number">
            <input placeholder="Gift Card Number" /><input placeholder="Control Code" />
        </div>
    </div>
    }
}

export default Coupon;