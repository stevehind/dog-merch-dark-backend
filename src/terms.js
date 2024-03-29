import React, { Component } from 'react';

class Terms extends Component {

    constructor(props) {
        super(props);
        this.state = {clicked: false} 
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({clicked: true})
    }

    handleHide = (event) => {
        event.preventDefault();
        this.setState({clicked: false})
    }

    render() {

        if (this.state.clicked) return (
            <div className="alternate-background">
                <div className="vertical-center">
                    <button onClick={this.handleHide} className="muted-button">Hide</button>
                </div>
            <div className="small-container">
                <h1>Terms and Conditions ("Terms")</h1>
                <p>Last updated: Aug, 2019</p>
                <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
                    stevehind-dog-merch.builtbydark.com website (the "Service") operated by stevehind.me ("us", "we", or "our").</p>
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These
                    Terms apply to all visitors, users and others who access or use the Service.</p>
                <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms
                    then you may not access the Service.
                </p>
                <h2>Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by us.
                </p>
                <p>We have no control over, and assumes no responsibility for, the content, privacy policies, or practices of
                    any third party web sites or services. You further acknowledge and agree that we pins shall not be responsible
                    or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with
                    use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
                <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services
                    that you visit.</p>
                <h2>Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard
                    to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any
                    provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms
                    will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede
                    and replace any prior agreements we might have between us regarding the Service.</p>
                <h2>Refunds</h2>
                <p>We hope you'll love your dog merch. Refunds are provided only for defective goods. If you have a problem with your order please contact us.</p>
                <h2>Privacy Policy</h2>
                <p>This site collects no personal data other than when an order is placed. We keep the data associated with your order solely for the purposes of processing the order and potentially providing refunds. We will never share your personal information with third parties. This site does not use cookies.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please <a href="mailto:steve.hind+website@gmail.com">contact us</a>.</p>
            </div>
            <div className="vertical-center">
                <button onClick={this.handleHide} className="muted-button">Hide</button>
            </div>
            </div>
        )


        return (
            <div className="vertical-center">
                <button className="muted-button" onClick={this.handleClick}>Terms, Privacy Policy and Refunds</button>
            </div>
        );
    }
}

export default Terms;