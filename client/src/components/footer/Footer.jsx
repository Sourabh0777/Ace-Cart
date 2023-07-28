import React from "react";
import '../footer/footer.css'

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start bg-light text-muted"
        style={{ fontSize: 14 }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>AceCart
                </h6>
                <p>An online shopping store for your needs.</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                <p>
                  <a href="/pages/about" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/pages/contact" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Payments
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shipping
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Policy</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Return Policy
                  </a>
                </p>
                <p>
                  <a href="/pages/termsofuse" className="text-reset">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="/pages/security" className="text-reset">
                    Security
                  </a>
                </p>
                <p>
                  <a href="/pages/privacypolicy" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p style={{ textAlign: "jutsify" }}>
                  <i className="fas fa-home me-3"></i> AceCart Office Address
                  <br />
                  CIN : U51109KA2012PTC066107
                  <br />
                  Telephone: 044-45614700
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="/">
           ace cart
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
