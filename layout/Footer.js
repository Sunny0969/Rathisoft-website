import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 5:
      return <Footer5 />;
    default:
      return <Footer1 />;
  }
};
export default Footer;


const Footer1 = () => {
  return (
    <footer className="main-footer bgc-black text-white rel z-1">
      <div className="footer-marquee pt-60 pb-75 rpy-90 rel">
        <div className="container blank-container bordered-x" />
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Rathisoft Innovation</span>
            <span className="marquee-item">_</span>
            <span className="marquee-item">Rathisoft Innovation</span>
            <span className="marquee-item">_</span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Rathisoft Innovation</span>
            <span className="marquee-item">_</span>
            <span className="marquee-item">Rathisoft Innovation</span>
            <span className="marquee-item">_</span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Rathisoft Innovation</span>
            <span className="marquee-item">_</span>
            <span className="marquee-item">Rathisoft Innovation</span>
            <span className="marquee-item">_</span>
          </span>
        </span>
      </div>
      <div className="container bordered-x pb-50">
        <div className="row justify-content-between">
          <div
            className="col-lg-4 col-sm-8"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-newsletter">
              <div className="footer-logo mb-20">
                <Link href="/">
                  <img src="/assets/images/logos/2.png" alt="Logo" />
                </Link>
              </div>
              <p>
                High-quality content the heart successful marketing strategy
                drives engage.
              </p>
              <form className="newsletter-form mt-25" action="#">
                <label htmlFor="news-email">
                  <i className="fas fa-envelope" />
                </label>
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="theme-btn btn-small hover-primary"
                  data-hover="Subscribe"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row justify-content-between">
              <div
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-widget footer-text">
                  <div className="footer-title">
                    <h6>Location</h6>
                  </div>
                  <div className="text">
                  Hyderabad Sindh, Pakistan
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-widget footer-text">
                  <div className="footer-title">
                    <h6>Contact Us</h6>
                  </div>
                  <div className="text">
                    <a href="mailto:info@rathisoftinnovation.com">info@rathisoftinnovation.com</a>
                    <br />
                    <a href="tel:+923323622053">+92-332-3622053</a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-widget footer-contact">
                  <div className="footer-title">
                    <h6>Follow Us</h6>
                  </div>
                  <div className="social-style-two mt-15">
                    <Link href="https://www.facebook.com/rathieshwar">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/rathisoft-innovation/">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bordered-x bordered-top pt-25 pb-10">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright © <Link href="/">Rathisoft Innovation</Link>, all rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
      <div className="footer-shapes">
        <div className="shape">
          <img src="/assets/images/shapes/footer-shape.png" alt="Shape" />
        </div>
      </div>
    </footer>
  );
};


