"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Gallery from "@/components/Gallery";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header id="header">
        <Image
          src="/mainLogo.png"
          alt="Prana Sauna Logo"
          width={150}
          height={50}
          className="logo"
        />
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          strategy="lazyOnload"
        />
      </header>

      {/* Intro */}
      <section id="intro" className="main style1 dark fullscreen">
        <div className="content">
          <header>
            <Image
              src="/logo.svg"
              alt="Prana Sauna Logo"
              width={300}
              height={100}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </header>
          <p className="tk-gyst-variable white">
            Welcome to <strong>Prana Sauna.</strong> This 12 person sauna-on-wheels
            was hand-crafted with the intention of creating an authentic sauna
            experience where you connect to nature, physical and mental wellness,
            and community.
          </p>
          <footer>
            <a href="#one" className="button style2 down">
              Contact
            </a>
          </footer>
        </div>
      </section>

      {/* One - What We Do */}
      <section id="one" className="main style2 right dark fullscreen">
        <div className="content box style2">
          <header>
            <h2 className="tk-gyst-variable">What We Do</h2>
          </header>
          <p className="tk-gyst-variable">
            We are happy to provide delivery up and down the Sunshine Coast to
            residences for private bookings.* We are in purpose of creating
            access to a spa-like experience for all, and community sessions
            offered at the Sechelt Pier.
          </p>
        </div>
        <a href="#two" className="button style2 down anchored">
          Next
        </a>
      </section>

      {/* Two - Pricing */}
      <section id="two" className="main style2 left dark fullscreen">
        <div className="content box style2">
          <header>
            <h2 className="tk-gyst-variable">Overnight rentals:</h2>
          </header>
          <ul className="tk-gyst-variable">
            <li>$2.00/km delivery rate</li>
            <li>$300 one-night rental</li>
            <li>$450 two-night rental</li>
            <li>$600 three-night rental</li>
            <li>$30/person for community nights</li>
          </ul>
          <header>
            <h2 className="tk-gyst-variable">Add-Ons:</h2>
          </header>
          <ul className="tk-gyst-variable">
            <li>$25/night add on for cold plunge rentals</li>
            <li>$40 of firewood for a 2-3 hour burn</li>
          </ul>
          <header>
            <h2 className="tk-gyst-variable">Sauna by the Sea:</h2>
          </header>
          <ul className="tk-gyst-variable">
            <li>$25/person 90mins</li>
            <li>$300/12-person private beachside</li>
          </ul>
          <header>
            <h2 className="tk-gyst-variable">3-Month punch pass:</h2>
          </header>
          <ul className="tk-gyst-variable">
            <li>$200 ten-punch pass</li>
            <li>$110 five-punch pass</li>
          </ul>
        </div>
        <a href="#three" className="button style2 down anchored">
          Next
        </a>
      </section>

      {/* Three - FAQ */}
      <section id="three" className="main style2 right dark fullscreen">
        <div className="content box style2">
          <header>
            <h2 className="tk-gyst-variable">FAQ</h2>
            <h2 className="tk-gyst-variable">What should I bring?</h2>
          </header>
          <ul className="tk-gyst-variable">
            <li>Two towels (one to sit on and one to dry off with)</li>
            <li>
              A bathing suit or clothing you&apos;re comfortable sweating and
              plunging in
            </li>
            <li>Water shoes</li>
            <li>A water bottle (no glass, please)</li>
          </ul>
        </div>
        <a href="#work" className="button style2 down anchored">
          Next
        </a>
      </section>

      {/* Work - Gallery */}
      <section id="work" className="main style3 primary">
        <div className="content">
          <header>
            <h2 className="tk-gyst-variable">Our Mission</h2>
            <p className="tk-gyst-variable">
              At Prana Sauna, our mission is to cultivate connections and foster
              community through the power of holistic wellness. We strive to
              build meaningful relationships and create a strong network within
              our community, making a lasting presence that promotes health and
              well-being.
            </p>
          </header>

          {/* Gallery */}
          <Gallery />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="main style3 secondary">
        <div className="content">
          <header>
            <h2 className="tk-gyst-variable">Contact Us</h2>
            <p className="tk-gyst-variable">
              Follow us on Instagram and sign up for our email list for
              notification of community beach nights.
            </p>
          </header>

          {/* Social Icons and Email */}
          <div className="contact-social">
            <div className="contact-item">
              <a
                href="https://www.instagram.com/pranasauna_"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.instagram.com/pranasauna_"
                className="tk-gyst-variable"
              >
                @pranasauna_
              </a>
            </div>
            <div className="contact-item">
              <a href="mailto:pranasauna@gmail.com" className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="mailto:pranasauna@gmail.com" className="tk-gyst-variable">
                pranasauna@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="box">
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us17.list-manage.com/subscribe/post?u=c096ccb7677d7f82c92eee94f&amp;id=eb764d081a&amp;f_id=00e6c3e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe to our Newsletter</h2>
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>

                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                    />
                  </div>

                  <div id="mce-responses" className="clear foot">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  {/* Hidden anti-spam field */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-5000px" }}
                  >
                    <input
                      type="text"
                      name="b_c096ccb7677d7f82c92eee94f_eb764d081a"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>

                  <div className="clear foot">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* FareHarbor calendar */}
          <div style={{ paddingTop: "20px" }}>
            <Script
              src="https://fareharbor.com/embeds/script/calendar/pranasauna/?fallback=simple&full-items=yes&flow=1557441"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        {/* Icons */}
        <ul className="icons">
          <li>
            <a
              href="https://www.instagram.com/pranasauna_"
              target="_blank"
              rel="noopener noreferrer"
              className="icon brands"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="mailto:pranasauna@gmail.com" className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>

        {/* Menu */}
        <ul className="menu">
          <li>&copy; Copyright 2026 Prana Sauna</li>
        </ul>
      </footer>

      {/* FareHarbor Book Now Button */}
      <a
        href="https://fareharbor.com/embeds/book/pranasauna/?full-items=yes"
        className="tk-gyst-variable fh-button-true-flat-pop"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#455E49",
          color: "white",
          padding: "1em 2em",
          borderRadius: "3.5em",
          textDecoration: "none",
          zIndex: 9999,
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        Book Now
      </a>
    </>
  );
}
