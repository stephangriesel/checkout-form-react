import React, { Component } from 'react';

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coupon: "",
            couponControl: ""
        }
        this.showResult = this.showResult.bind(this); // es6 option also possible
    };

    handleChange = (event, fieldName) => {
        console.log('property passed:', event.target.name);
        // console.log('fieldname:', fieldName);
        // console.log("handle coupon working"); // TEST
        // console.log(event.target.value); // TEST
        this.setState({ [event.target.name]: event.target.value });
    };

    // Before refactor:
    // handleChangeCoupon = event => {
    //     console.log("handle coupon working"); // TEST
    //     console.log(event.target.value); // TEST
    //     this.setState({ coupon: event.target.value });
    // };

    // handleChangeControl = event => {
    //     console.log("handle control working"); // TEST
    //     console.log(event.target.value); // TEST
    //     this.setState({ couponControl: event.target.value });
    // };

    showResult() {
        this.setState({
            showResult: !this.state.showResult
        });
    }

    onSubmit = e => {
        e.preventDefault();
    };


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <div className="show-coupon">
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
                        onSubmit={this.handleSubmit}
                        noValidate>

                        <input
                            name="coupon"
                            value={this.state.coupon}
                            onChange={this.handleChange}
                            type="number"
                            id="number__gift-number"
                            placeholder="Gift Card Number"
                            required />

                        <input
                            value={this.state.couponcontrol}
                            onChange={this.handleChange}
                            name="control"
                            type="number"
                            id="control__gift-number"
                            placeholder="Control Code"
                            required />
                            <button type="submit" className="apply-btn" >APPLY</button>
                    </form>
                </div>
            </div>
            )
    }
}

export default Coupon;