import React, { Component } from 'react';

class Result extends Component {

    state = {
        loading: true,
        consumer: null
    };

    render() {
        return (
            <div className="result">
                <div className="result-left">
                    <p>Gift Card</p>
                    <p>
                        <span id="coupon-displayNumber">
                            {this.props.coupon}
                        </span>
                        <span id="coupon-displayCode">
                            <span> {this.props.couponControl} </span>
                        </span>
                    </p>
                </div>
                <div className="result-right">
                    <span className="amount">-€20.00</span>
                </div>
            </div>
        )
    }
}

export default Result;
