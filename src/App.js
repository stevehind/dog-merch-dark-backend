import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import sydney_and_sesil from './sydney-and-sesil.jpg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
        <h1>Sydney and Sesil 2020 Wall Calendar</h1>
        <p>We'll send you an awesome month-by-month wall calendar for 2020, featuring a photo of these dumb dogs for each month.</p>
        <div className="responsive-image, vertical-centre">
          <img 
            src={sydney_and_sesil}
            alt="Sydney and Sesil!"
            width="400"
            height="400"/>
          <blockquote className="">"This calendar is awesome!" - my grandma.</blockquote>
        </div>
        </div>
        <StripeProvider apiKey="pk_test_qW2Pb7p9JfKLByXoUL5Xp8ZA00YFf1TF3q">
          <div className="container">
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default App;