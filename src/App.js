import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_qW2Pb7p9JfKLByXoUL5Xp8ZA00YFf1TF3q">
        <div className="example">
          <h1>Buy Sydney and Sesil Merch!</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;