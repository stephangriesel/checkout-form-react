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

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return <div className="show-coupon">
            <p className="coupon-desc">Please enter the 19-digit number and code from your gift card below.</p>
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
                : null}
            <div className="gift-number">
                <form className="giftnumber-input"
                    onSubmit={this.onSubmit}
                    noValidate>
                    <input type="number" id="number-space" placeholder="Gift Card Number" />
                    <input type="number" placeholder="Control Code" />
                </form>
            </div>
        </div>
    }
}

export default Coupon;