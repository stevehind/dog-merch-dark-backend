import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class PaymentForm extends Component {
    
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {submitted: false}
    }

    async submit(ev) {
        this.setState({submitted: true});
    }

    render() {
        return (
        <div className="checkout small-container">
            <p>Enter card details below.
                    Card payments are processed by Stripe, and we don't see or store your card details.
                    We'll ship the calendar within two weeks of order.
                    Shipping and tax are included in the price.</p>
            <CardElement className="left-right-padding" />
            <div className="vertical-center padding-top padding-bottom">
                <button onClick={this.submit}>Purchase: $40.00 USD</button>
            </div>
        </div>
        );
    }

}

export default injectStripe(PaymentForm);