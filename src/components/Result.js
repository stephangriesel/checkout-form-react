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
        this.setState({ consumer: data, loading: true });
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
                                        **** **** **** ***
                                    </span>
                                    <span id="coupon-displayCode">
                                        <span> *** </span>
                                    </span>
                                </p>
                            </div>
                            <div className="result-right">
                                <p>-$<span>0.00</span></p>
                            </div>
                        </React.Fragment>
                    )
                }

            </div>
        )
    }
}

export default Result;
