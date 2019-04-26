import React, { Component } from 'react';

const inputState = {
    value: "",
    valid: true,
    typeMismatch: false,
    errMsg: ""
};

const ErrorValidationLabel = ({ txtLbl }) => (
    <label htmlFor="" style={{ color: "red" }}>
        {txtLbl}
    </label>
);

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResult: false,
            coupon: {
                ...inputState,
                fieldName: "Coupon Number",
                required: true,
                requiredTxt: "Coupon Code Required",
                formatErrorTxt: "Incorrect coupon format",
            },
            couponcontrol: {
                ...inputState,
                fieldName: "Coupon Control Code",
                required: true,
                requiredTxt: "Coupon Control Code Required",
                formatErrorTxt: "Incorrect ccontrol code format"
            },
            allFieldsValid: false
        }
        this.showResult = this.showResult.bind(this); // es6 option also possible
    };

    handleChange = event => {
        console.log("handle change working"); // TEST
        console.log(event.target.value); // TEST
        this.setState({ coupon: event.target.value });
    };

    showResult() {
        this.setState({
            showResult: !this.state.showResult
        });
    }

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        const { coupon, couponcontrol } = this.state;

        const renderCouponValidationError = coupon.valid ?
            "" :
            <ErrorValidationLabel
                txtLbl={coupon.typeMismatch ?
                    coupon.formatErrorTxt :
                    coupon.requiredTxt}
            />;

        const renderCouponControlValidationError = couponcontrol.valid ?
            "" :
            <ErrorValidationLabel
                txtLbl={couponcontrol.typeMismatch ?
                    couponcontrol.formatErrorTxt :
                    couponcontrol.requiredTxt}
            />;

        return (
            <React.Fragment>
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
                        onSubmit={this.onSubmit}
                        noValidate>

                        <input
                            onChange={this.handleChange}
                            value={this.state.coupon}
                            name="giftcard-number"
                            type="number"
                            id="number__gift-number"
                            placeholder="Gift Card Number"
                            required />
                        {renderCouponValidationError}

                        <input
                            onChange={this.handleChange}
                            name="giftcard-code"
                            type="number"
                            id="control__gift-number"
                            placeholder="Control Code"
                            required />
                        {renderCouponControlValidationError}

                    </form>
                </div>
            </div>
            </React.Fragment>
            )
    }
}

export default Coupon;