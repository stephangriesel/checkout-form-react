import React, { Component } from 'react';
import Result from './Result';
import MaskedInput from 'react-maskedinput';

const initialState = {
    focus: false,
    showResult: true,
    coupon: "",
    couponControl: "",
    couponError: "",
    controlError: ""
}

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.showResult = this.showResult.bind(this);
    };

    _onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleChange = (event, fieldName) => {
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
        const url = "http://localhost:3004/results";

        const submitteddata = [{
            date: new Date(),
            giftcardnumber: this.state.coupon,
            code: this.state.couponControl,
            price: "20.00"
        }]

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(submitteddata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState);
        }
    };

    validate = () => {
        let couponError = "";
        let controlError = "";

        if (!this.state.coupon) {
            couponError = "Incorrect coupon code, please try again"
        }

        if (!this.state.couponControl) {
            controlError = "Incorrect coupon control code, please try again"
        }

        if (couponError || controlError) {
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
                    <Result coupon={this.state.coupon} couponControl={this.state.couponControl} />
                    : null}
                <div className="gift-number">
                    <form className="giftnumber-input"
                        onSubmit={this.handleSubmit}
                        noValidate>

                        <MaskedInput
                            name="coupon"
                            value={this.state.coupon}
                            onChange={this._onChange}
                            maxLength="19"
                            mask="1111 1111 1111 1111 111"
                            type="text"
                            pattern="[0-9]"
                            id="number__gift-number"
                            placeholder="Gift Card Number"
                            onInput={this.replaceCharacter}

                            onFocus={this.onInputFocus}
                            required />

                        <MaskedInput
                            name="couponControl"
                            value={this.state.couponControl}
                            onChange={this.handleChange}
                            type="text"
                            pattern="[0-9]"
                            mask="111"
                            id="control__gift-number"
                            placeholder="Control Code"
                            onFocus={this.onInputFocus}
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