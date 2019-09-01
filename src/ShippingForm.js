import React, { Component } from 'react';
import PaymentForm from './PaymentForm';

class ShippingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {payment: false};
        this.submit = this.submit.bind(this);
      }
    
      handleChange = event => {
          const {name,value} = event.target;
  
          this.setState({
              [name] : value
          });
      }
  
      getFormData = object => Object.keys(object).reduce((formData, key) => {
          formData.append(key, object[key]);
          return formData;
      }, new FormData());

      async submit(ev) {
        this.setState({payment: true});
    }

      render() {
        const {name, email, address, city, state, zip} = this.state

        if (this.state.payment === true) return (
            <PaymentForm/>
        );

        return (
            <div className="small-container">
                <form>
                    <p>Enter your the address you'd like your calendar to be shipped to, and an email address for any updates (we won't spam you).</p>
                    <div className="left-right-padding">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}/>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={this.handleChange}/>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.handleChange}/>
                    <label>State</label>
                    <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={this.handleChange}/>
                    <label>Zip</label>
                    <input
                        type="text"
                        name="zip"
                        value={zip}
                        onChange={this.handleChange}/>
                    </div>
                </form>
                <div className="vertical-center padding-top padding-bottom">
                    <button onClick={this.submit}>Proceed to Checkout</button>
                </div>
            </div>
        );
    }

}

export default ShippingForm;