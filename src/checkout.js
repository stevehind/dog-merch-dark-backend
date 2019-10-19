import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./components/CheckoutForm";
import api from "./api";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: null,
      key: this.props.dataFromParent
    };
  }

  componentDidMount() {
    api.getPublicStripeKey().then(apiKey => {
      this.setState({
        apiKey: apiKey
      });
    });
  }

  render() {
    return (
      <div className="full-container checkout">
        {this.state.apiKey && (
          <StripeProvider apiKey={this.state.apiKey} dataFromParent = {this.props.dataFromParent}>
            <Elements dataFromParent = {this.props.dataFromParent}>
              <CheckoutForm dataFromParent = {this.props.dataFromParent} />
            </Elements>
          </StripeProvider>
        )}
      </div>
    );
  }
}

export default Checkout;