import React, { Component } from 'react';
import '../css/GiftCard.css';
import Coupon from './Coupon'

class GiftCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCoupon: false
        }
        this.showCoupon = this.showCoupon.bind(this);
    }

    showCoupon() {
        this.setState({
            showCoupon: !this.state.showCoupon
        });
    }

    handleSubmit = () => {
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h4>Gift Cards</h4>

                    <div className="gift-checkbox">
                        <form>
                            <label className="container">Do you have a gift card?
                                <input type="checkbox" name="giftcard-checkbox" onClick={this.showCoupon} />
                                <span className="checkmark"></span>
                            </label>
                        </form>
                    </div>

                    {this.state.showCoupon ?
                        <Coupon />
                        : null}
                </div>
            </div>
        );
    }
}

export default GiftCard;