import React, { Component } from 'react';
import Result from './Result';

const initialState = {
    focus: false,
    showResult: true,
    coupon: "",
    couponcontrol: "",
    couponerror: "",
    controlerror: ""
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
        
        // POST Data To Backend
        console.log("Coupon: " + this.state.coupon);
        console.log("Coupon: " + this.state.couponcontrol);
        const url = "http://localhost:3004/results";
        const submitteddata = {
            id:"1",
            giftcardnumber: this.state.coupon,
            code: this.state.couponcontrol,
            price:"9.99"
        }
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(submitteddata), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        console.log(submitteddata)

        // Validate form
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            //clear form
            this.setState(initialState);
        }
    };

    validate = () => {
        let couponerror = "";
        let controlerror = "";

        if (!this.state.coupon) { // if it does not include
            couponerror = "Incorrect coupon code, please try again"
        }

        if (!this.state.controlerror) {
            controlerror = "Your control code seems to be invalid, please try again"
        }

        if (couponerror || controlerror) {
            this.setState({ couponerror, controlerror });
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
                            maxLength="19"
                            id="number__gift-number"
                            placeholder="Gift Card Number"
                            onFocus={this.onInputFocus}
                            // onBlur={this.onInputBlur}
                            required />

                        <input
                            name="couponcontrol"
                            value={this.state.couponcontrol}
                            onChange={this.handleChange}
                            // type="number"
                            maxLength="3"
                            id="control__gift-number"
                            placeholder="Control Code"
                            onFocus={this.onInputFocus}
                            // onBlur={this.onInputBlur}
                            required />

                        <button type="submit" className="apply-btn" >APPLY</button>
                    </form>
                </div>
                <p className="errorMessage">{this.state.couponerror}</p>
                <p className="errorMessage">{this.state.controlerror}</p>
            </div>

        )
    }
}

export default Coupon;