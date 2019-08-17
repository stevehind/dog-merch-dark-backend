import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
      super(props);
      this.state = {complete: false}
      this.submit = this.submit.bind(this);
    }
  
    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name : "Name"});
        let response = await fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: token.id
        });

        if (response.ok) this.setState({complete: true});
    }
  
    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;  

        return (
            <div className="checkout">
                <p>Enter card details below to purchase.</p>
                <CardElement />
                <button onClick={this.submit}>Purchase</button>
            </div>
        );
    }
  }
  
  export default injectStripe(CheckoutForm);