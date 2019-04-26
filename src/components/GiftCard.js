import React, { Component } from 'react';
import '../css/GiftCard.css';
import Coupon from './Coupon'

class GiftCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCoupon: false
        }
        this.showCoupon = this.showCoupon.bind(this); // es6 option also possible
    }

    showCoupon() {
        this.setState({
            showCoupon: !this.state.showCoupon
        });
    }
    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h4>Gift Cards</h4>
                    <form>
                        <div className="gift-checkbox">
                            <label class="container">Do you have a gift card?
                                <input type="checkbox" name="giftcard-checkbox" onClick={this.showCoupon} />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        {this.state.showCoupon ?
                            <Coupon />
                            : null}

                        <button className="apply-btn">APPLY</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default GiftCard;