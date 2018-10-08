import React, { Component } from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { navigate } from 'gatsby'
import WireframeContact from '../components/svg/wireframes-contact'
import { FaArrowRight } from 'react-icons/fa'
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGltaWhyYXMiLCJhIjoiY2ptZDlmeG1tMTcwODNwbGhhamdwMjZnMSJ9.v_hojbAgy2uUEhnlmdPI5g"
});

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const message = encode({
      "form-name": form.getAttribute("name"),
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: message
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const markerUrl = "https://i.imgur.com/MK4NUzI.png"
    return (
      <Layout>

        <Hero
          heading={'Would you like to \ndiscuss your project?'}
          subheading={'Contact Page'}
          svgImage={WireframeContact}
        />

        <section className="align-center mr-m ml-m">
          <p>Do you have a creative challenge or an app idea? Contact me and let’s see if I can help you with it.</p>
          <p>You can reach me on +386 (0) 31 786 716, by emailing hi@timihras.com or using the form below.</p>
        </section>

        <section className="pt-0 align-center mr-m ml-m">
          <form className="contact-form">
            <p>Hi Timi, my name is</p>
            <input type="text" placeholder="John Doe" />
            <p>I want to speak about</p>
            <input type="text" placeholder="designing my app" />
            <p>You can reach me at</p>
            <input type="email" placeholder="john@doe.com" />
            <p>and</p>
            <input type="text" placeholder="this phone number" />
            <p>I need</p>
            <input type="text" placeholder="describe the project" />
            <button type="submit" className="btn mt-l">Send Message</button>
          </form>
        </section>

        <hr className="hr-center mt-l mb-l" />

        <section className="full-width align-center">
          <h1><strong>Want to know</strong>where I am located?</h1>
          <p className="mb-xl">I live in Maribor, Slovenia <br />
            <a href="http://google.si/" target="_blank" rel="noopener noreferrer">
              Get Directions<small><FaArrowRight /></small>
            </a>
          </p>
          <Map
            style="mapbox://styles/mapbox/light-v9"
            containerStyle={{
              height: "25rem"
            }}
            center={[15.64200, 46.54668]}
            zoom={[12]}
            bearing={[10]}
            pitch={[60]}
            scrollZoom={false}
          >
            <Marker
              coordinates={[15.633497288468789, 46.532385852168034]}
              anchor="bottom">
              <img src={markerUrl} alt="Marker" />
            </Marker>
          </Map>
        </section>

        <section className="align-center pt-0">
          <Footer />
        </section>

      </Layout>
    )
  }
}

export default ContactPage;
