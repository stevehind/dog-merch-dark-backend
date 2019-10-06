import React, { Component } from 'react';

class CheckoutForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          shipping_submitted: false,
          key: null
        }
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
        let body = {
            name : this.state.name,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        let response = await fetch("/shipping-details", {
            method: "POST",
            headers: {},
            body: JSON.stringify(body)
        });

        if (response.ok) this.setState({
            shipping_submitted: true,
            key: response.body
            });
        else this.setState({shipping_submitted: false});
    }
  
    render() {
        const {name, email, address, city, state, zip} = this.state

        if (this.state.shipping_submitted === true) return (
            <div className="small-container">
                <p>Test</p>
            </div>
        )

        return (
            <div className="small-container">
                <form>
                    <p>Enter your the address you'd like your calendar to be shipped to, and an email address for any updates (we won't spam you).</p>
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
                </form>
                <div className="vertical-center padding-top padding-bottom">
                    <button onClick={this.submit}>Proceed to Payment</button>
                </div>
    

            </div>
        );
    }
  }
  
  export default (CheckoutForm);