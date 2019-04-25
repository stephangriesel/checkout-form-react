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
                            <input type="checkbox" name="giftcard-checkbox" />
                            <label><span className="check">Do you have a gift card?</span></label>
                        </div>
                        <div className="gift-number">
                            <input /><input />
                        </div>
                        <button className="apply-btn">APPLY</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default GiftCard;