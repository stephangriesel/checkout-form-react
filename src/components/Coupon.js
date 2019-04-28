import React, { Component } from 'react';
import Result from './Result';

const initialState = {
    focus: false,
    showResult: true,
    coupon: "",
    couponcontrol: "",
    couponError: "",
    controlError: ""
}

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.showResult = this.showResult.bind(this); // es6 option also possible
    };

    handleChange = (event, fieldName) => {
        console.log('property passed:', event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    };

    showResult() {
        this.setState({
            showResult: !this.state.showResult
        });
    }

    onInputFocus = () => {
        this.setState({
            focus: true
        });
    }

    onInputBlur = () => {
        this.setState({
            focus: false
        });
    }

    onSubmit = e => {
        e.preventDefault();
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            //clear form
            this.setState(initialState);
        }
    };

    validate = () => {
        let couponError = "";
        let controlError="";
        
        if(!this.state.coupon) { // if it does not include
            couponError = "Incorrect coupon code, please try again"
        }

        if(!this.state.controlError) {
            controlError = "Your control code seems to be invalid, please try again"
        }

        if (couponError || controlError ) {
            this.setState({ couponError, controlError });
            return false;
        }

        return true;
    }

    render() {

        return (
            <div className="show-coupon">
                <p className="coupon-desc">Please enter the 19-digit number and code from your gift card below.</p>
                {this.state.focus ?
                    <Result />
                    : null}
                <div className="gift-number">
                    <form className="giftnumber-input"
                        onSubmit={this.handleSubmit}
                        noValidate>

                        <input
                            name="coupon"
                            value={this.state.coupon}
                            onChange={this.handleChange}
                            // type="number" // react can only use string together with maxlength
                            maxLength="19"
                            id="number__gift-number"
                            placeholder="Gift Card Number"
                            onFocus={this.onInputFocus}
                            onBlur={this.onInputBlur}
                            required />

                        <input
                            name="couponcontrol"
                            value={this.state.couponcontrol}
                            onChange={this.handleChange}
                            // type="number"
                            maxLength="3"
                            id="control__gift-number"
                            placeholder="Control Code"
                            required />

                        <button type="submit" className="apply-btn" >APPLY</button>
                    </form>
                </div>
                <p className="errorMessage">{this.state.couponError}</p>
                <p className="errorMessage">{this.state.controlError}</p>
            </div>

        )
    }
}

export default Coupon;