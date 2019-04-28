import React, { Component } from 'react';

class Result extends Component {

    state = {
        loading: true,
        consumer: null
    };

    async componentDidMount() {
        const url = "http://localhost:3004/results";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ consumer: data.consumer[0], loading: false });
        console.log(data);
    }

    render() {
        return (
            <div className="result">
                {this.state.loading || !this.state.consumer ? (
                    <div>retrieving coupon...</div>
                ) : (
                        <React.Fragment>
                            <div className="result-left">
                                <p>Gift card</p>
                                <p>
                                    <span id="coupon-displayNumber">
                                        {this.state.consumer.giftcardnumber}
                                    </span>
                                    <span id="coupon-displayCode">
                                        <span> {this.state.consumer.code}</span>
                                    </span>
                                </p>
                            </div>
                            <div className="result-right">
                                <p>-${this.state.consumer.price}</p>
                            </div>
                        </React.Fragment>
                    )
                }

            </div>
        )
    }
}

export default Result;
