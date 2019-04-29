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
                    <p>Gift card</p>
                    <p>
                        <span id="coupon-displayNumber">
                            {this.props.coupon}
                                    </span>
                        <span id="coupon-displayCode">
                            <span> {this.props.couponcontrol} </span>
                        </span>
                    </p>
                </div>
                <div className="result-right">
                    <p>-$<span>9.99</span></p>
                </div>

            </div>
        )
    }
}

export default Result;
