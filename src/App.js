import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import sydney_and_sesil from './sydney-and-sesil.jpg';
import Terms from './terms';

class App extends Component {
  render() {
    return (
      <html>
        <body>
          <div className="full-container">
            <div className="small-container vertical-center">
              <h1 className="text-center">The Sydney and Sesil<br/>2020 Wall Calendar</h1>
            </div>
            <div className="small-container vertical-center">
              <blockquote className="">"This calendar is awesome!"<br/> - my grandma.</blockquote>
            </div>
            <div className="small-container responsive-image vertical-center padding-bottom">
              <figure>
                <img 
                  src={sydney_and_sesil}
                  alt="Sydney and Sesil!"
                  width="400"
                  height="400"/>
                <figcaption className="text-center">
                  <a href="https://www.instagram.com/sydney_and_sesil/">Check them out on Instagram!</a>
                </figcaption>
              </figure>
            </div>
            <div className="small-container vertical-center">
              <p>Run, don't walk to secure your 2020 wall calendar,
                featuring a different photo each month of these stupid dogs!
                </p>
            </div>
          </div>
          <div className="full-container">
            <StripeProvider apiKey="pk_live_N0ieCjIE8lHaPeA3gdeq6ULm00NgerxJLj">
            <Elements>
              <CheckoutForm />
            </Elements>
            </StripeProvider>
          </div>
        </body>
        <footer className="full-container vertical-center padding-top alternate-background">
          <Terms/>
        </footer>
      </html>
    );
  }
}

export default App;