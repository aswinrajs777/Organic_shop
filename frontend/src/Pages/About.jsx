import React from 'react';
import './CSS/About.css';
import missionImage from '../Components/Assests/images.jpeg'; // Add your mission image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const About = () => {
  return (
    <div className="about-page container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4">About Us</h1>
          <p className="lead text-muted">Learn more about our journey and mission.</p>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6">
        <DotLottieReact
  src="https://lottie.host/57ebd102-642d-4182-8c10-15642248e879/HaU5qZqhwh.lottie"
  style={{ maxWidth: "600px", height: "400px" }}
  loop
  autoplay
/>         </div>
        <div className="col-12 col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality, organic products that improve the health and wellbeing of our customers. We believe in sustainability, eco-friendliness, and supporting local communities.
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-12 col-md-6">
        <DotLottieReact
  src="https://lottie.host/938a1b7b-4a1a-42d6-a6cc-fe4969f2eef8/6bQzvaYc0m.lottie"
  style={{ maxWidth: "600px", height: "400px" }}
  loop
  autoplay
/>        </div>
        <div className="col-12 col-md-6">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our company started with a simple idea: to make organic products accessible to everyone. Over the years, we have grown into a trusted brand, known for our commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="row text-center">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" /> */}
                <DotLottieReact
  src="https://lottie.host/11a076c7-a6aa-479f-bd7b-97c4a21174ff/usSJjlfYwM.json"
  style={{ maxWidth: "600px", height: "400px" }}
  loop
  autoplay
/>
                <div className="card-body">
                  <h5 className="card-title">XYZ</h5>
                  <p className="card-text">CEO</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
              <DotLottieReact
  src="https://lottie.host/11a076c7-a6aa-479f-bd7b-97c4a21174ff/usSJjlfYwM.json"
  style={{ maxWidth: "600px", height: "400px" }}
  loop
  autoplay
/>                <div className="card-body">
                  <h5 className="card-title">HMT</h5>
                  <p className="card-text">COO</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
              <DotLottieReact
  src="https://lottie.host/11a076c7-a6aa-479f-bd7b-97c4a21174ff/usSJjlfYwM.json"
  style={{ maxWidth: "600px", height: "400px" }}
  loop
  autoplay
/>                <div className="card-body">
                  <h5 className="card-title">ABC</h5>
                  <p className="card-text">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to learn more about our products, feel free to reach out to us.</p>
          <p>Email: support@organicshop.com | Phone: +91 9998887776</p>
        </div>
      </div>
    </div>
  );
}

export default About;
