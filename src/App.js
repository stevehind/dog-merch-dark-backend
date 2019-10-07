import React, {Component} from 'react';
import ShippingForm from './ShippingForm';
import Terms from './terms';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
              <blockquote className="">"This calendar is awesome!"<br/> - <em>my grandma</em>.</blockquote>
            </div>
            <div className="small-container left-right-padding no-padding-bottom">
                <Carousel />
            </div>
            <div className="no-padding-top small-container vertical-center">
              <p>Run, don't walk to secure your 2020 wall calendar,
                featuring a different photo each month of these stupid dogs! <a href="https://www.instagram.com/sydney_and_sesil/">Check them out on Instagram!</a>
                </p>
            </div>
          </div>
          <div className="full-container">
            <ShippingForm/>
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