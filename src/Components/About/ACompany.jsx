import teamwork from "../../assets/blklogo_.png";
import build from "../../assets/build.png";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ACompany = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      style={{
        backgroundImage: `url(${build})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "1000px", // Set a max-width for better readability on large screens
          margin: "0 auto", // Center the content horizontally
        }}
      >
        <div data-aos="zoom-in" onContextMenu={preventDefault}>
          <img
            src={teamwork}
            alt="RJ Logo"
            style={{
              width: "100%", // Make the image responsive
              maxWidth: "1000px", // Set a max-width for better readability on large screens
              height: "auto", // Maintain aspect ratio
              display: "block",
              margin: "0 auto", // Center the image horizontally
            }}
          />
        </div>
        <div
          style={{
            width: "100%", // Make the text content responsive
            textAlign: "justify",
            marginTop: "20px", // Add space between image and text content
          }}
        >
          <div data-aos="fade-up">
            <h1 style={{ marginTop: "20px", textAlign: "left" }}>ABOUT US</h1>
            <h5 style={{ marginBottom: "30px", fontWeight: "normal" }}>
              At Avietho Digital Marketing, we live and breathe digital
              marketing. Our team is comprised of creative thinkers, data-driven
              analysts, and certified marketing experts who are obsessed with
              driving growth for our clients. Founded in 2018, Avietho has been
              a pioneer in the digital marketing space, constantly evolving our
              strategies and solutions to keep pace with the ever-changing
              digital landscape. We utilize cutting-edge tools and tactics to
              craft campaigns that capture attention, inspire engagement, and
              maximize ROI across all digital channels.
            </h5>
          </div>
          <div data-aos="fade-up">
            <h1 style={{ marginBottom: "20px", textAlign: "left" }}>
              OUR CORE VALUES
            </h1>
            <h5 style={{ marginBottom: "30px", fontWeight: "normal" }}>
              <b>Transparency - </b>We practice full transparency with our
              clients, providing clear insights into our process, progress, and
              performance metrics.
              <br />
              <br />
              <b>Ingenuity - </b>Thinking outside the box and challenging
              conventions allows us to find creative solutions tailored to our
              clients' unique needs.
              <br />
              <br />
              <b>Integrity - </b>We operate with the highest levels of
              integrity, honesty, and accountability in everything we do.
              <br />
              <br />
              <b>Passion - </b>Our team is passionate about digital marketing
              and driven to achieve superior results.
              <br />
              <br />
              <b>Growth - </b>We are committed to continuous education to grow
              our knowledge and provide our clients with leading digital
              marketing strategies.
              <br />
              <br />
              Digital marketing is our sole focus and we are committed to
              staying at the forefront of industry trends and developments. With
              expertise spanning SEO, PPC, social media, content strategy, web
              design, analytics and more, we develop unified marketing
              ecosystems carefully calibrated to maximize conversions and
              revenue growth.
              <br />
              <br />
              Our collaborative approach fosters long-term partnerships with
              clients who trust us as strategic advisors to their organizations.
              Let's drive growth together through insights-driven, innovative
              digital marketing solutions from Avietho Digital Marketing.
            </h5>
          </div>
          <div data-aos="fade-up">
            <h1 style={{ marginBottom: "20px", textAlign: "left" }}>
              OUR APPROACH
            </h1>
            <h5 style={{ marginBottom: "30px", fontWeight: "normal" }}>
              We take an agile, insights-driven approach to maximize the impact
              of our clients' digital marketing programs. This process includes:
              <br />
              <br />
              <ul>
                <li>Discovery & Strategy</li>
                <li>Campaign Planning & Management</li>
                <li>Continuous Optimization & Analytics</li>
                <li>Creative Development & Content Production</li>
              </ul>
            </h5>
          </div>
          <div data-aos="fade-up">
            <h1 style={{ marginBottom: "20px", textAlign: "left" }}>MISSION</h1>
            <h5 style={{ marginBottom: "30px", fontWeight: "normal" }}>
              With God-given talents, combined with the experience and
              dedication of our team, we endeavor to render our services with
              distinction and excellence.
            </h5>
          </div>
          <div data-aos="fade-up">
            <h1 style={{ marginBottom: "20px", textAlign: "left" }}>VISION</h1>
            <h5 style={{ marginBottom: "20px", fontWeight: "normal" }}>
              We are committed to building communities around lifetime brands.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACompany;
