import React, { Component } from 'react';
import '../css/GiftCard.css';

class GiftCard extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h4>Gift Cards</h4>
                    <form>
                        <div className="gift-checkbox">
                            <label class="container">Do you have a gift card?
                                <input type="checkbox" name="giftcard-checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="show-coupon">
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
                        <button className="apply-btn">APPLY</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default GiftCard;