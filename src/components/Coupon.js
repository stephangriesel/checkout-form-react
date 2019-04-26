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
                formatErrorTxt: "Incorrect coupon format"
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
    }

    showResult() {
        this.setState({
            showResult: !this.state.showResult
        });
    }

    onSubmit = e => {
        e.preventDefault();
    };



    // Codeburst Start 

    //we need to extract specific properties in Constraint Validation API using this code snippet
    reduceFormValues = formElements => {
        const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element
        //we need to extract specific properties in Constraint Validation API using this code snippet
        const formValues = arrElements
            .filter(elem => elem.name.length > 0)
            .map(x => {
                const { typeMismatch } = x.validity;
                const { name, type, value } = x;
                return {
                    name,
                    type,
                    typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
                    value,
                    valid: x.checkValidity()
                };
            })
            .reduce((acc, currVal) => { //then we finally use reduce, ready to put it in our state
                const { value, valid, typeMismatch } = currVal;
                const {
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                } = this.state[currVal.name]; //get the rest of properties inside the state object
                //we'll need to map these properties back to state so we use reducer...
                acc[currVal.name] = {
                    value,
                    valid,
                    typeMismatch,
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                };
                return acc;
            }, {});
        return formValues;
    }
    checkAllFieldsValid = (formValues) => {
        return !Object.keys(formValues)
            .map(x => formValues[x])
            .some(field => !field.valid);
    };
    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formValues = this.reduceFormValues(form.elements);
        const allFieldsValid = this.checkAllFieldsValid(formValues);

        //note: put ajax calls here to persist the form inputs in the database.
        //END
        this.setState({ ...formValues, allFieldsValid }); //we set the state based on the extracted values from Constraint Validation API
    };

    //END


    // Codenburst end

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
                        <input name="giftcard-number" type="number" id="number-space" placeholder="Gift Card Number" required />
                        {renderCouponValidationError}
                        <input name="giftcard-code" type="number" placeholder="Control Code" required />
                        {renderCouponControlValidationError}
                    </form>
                </div>
            </div>)
    }
}

export default Coupon;