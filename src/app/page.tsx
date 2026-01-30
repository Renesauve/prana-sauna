"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Gallery from "@/components/Gallery";
import Script from "next/script";

export default function Home() {
  return (
    <main className="snap-container">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
        <Image
          src="/mainLogo.png"
          alt="Prana Sauna Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </header>

      {/* Intro Section */}
      <section
        id="intro"
        className="snap-section section-intro min-h-screen flex items-center justify-center text-white text-center px-4"
      >
        <div className="max-w-2xl">
          <Image
            src="/logo.svg"
            alt="Prana Sauna"
            width={300}
            height={100}
            className="mx-auto mb-8 invert"
          />
          <p className="font-gyst text-lg md:text-xl mb-8 leading-relaxed">
            Welcome to <strong>Prana Sauna.</strong> This 12 person sauna-on-wheels
            was hand-crafted with the intention of creating an authentic sauna
            experience where you connect to nature, physical and mental wellness,
            and community.
          </p>
          <a
            href="#one"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Learn More
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        id="one"
        className="snap-section section-one min-h-screen flex items-center justify-end text-white px-4 md:px-16"
      >
        <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-md">
          <h2 className="font-gyst text-3xl md:text-4xl mb-6">What We Do</h2>
          <p className="font-gyst text-base md:text-lg leading-relaxed">
            We are happy to provide delivery up and down the Sunshine Coast to
            residences for private bookings.* We are in purpose of creating access
            to a spa-like experience for all, and community sessions offered at the
            Sechelt Pier.
          </p>
        </div>
        <a
          href="#two"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <FontAwesomeIcon icon={faChevronDown} className="w-8 h-8" />
        </a>
      </section>

      {/* Pricing Section */}
      <section
        id="two"
        className="snap-section section-two min-h-screen flex items-center justify-start text-white px-4 md:px-16"
      >
        <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-lg">
          <h2 className="font-gyst text-2xl md:text-3xl mb-4">Overnight rentals:</h2>
          <ul className="font-gyst text-base md:text-lg mb-6 space-y-1">
            <li>$2.00/km delivery rate</li>
            <li>$300 one-night rental</li>
            <li>$450 two-night rental</li>
            <li>$600 three-night rental</li>
            <li>$30/person for community nights</li>
          </ul>

          <h2 className="font-gyst text-2xl md:text-3xl mb-4">Add-Ons:</h2>
          <ul className="font-gyst text-base md:text-lg mb-6 space-y-1">
            <li>$25/night add on for cold plunge rentals</li>
            <li>$40 of firewood for a 2-3 hour burn</li>
          </ul>

          <h2 className="font-gyst text-2xl md:text-3xl mb-4">Sauna by the Sea:</h2>
          <ul className="font-gyst text-base md:text-lg mb-6 space-y-1">
            <li>$25/person 90mins</li>
            <li>$300/12-person private beachside</li>
          </ul>

          <h2 className="font-gyst text-2xl md:text-3xl mb-4">3-Month punch pass:</h2>
          <ul className="font-gyst text-base md:text-lg space-y-1">
            <li>$200 ten-punch pass</li>
            <li>$110 five-punch pass</li>
          </ul>
        </div>
        <a
          href="#three"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <FontAwesomeIcon icon={faChevronDown} className="w-8 h-8" />
        </a>
      </section>

      {/* FAQ Section */}
      <section
        id="three"
        className="snap-section section-three min-h-screen flex items-center justify-end text-white px-4 md:px-16"
      >
        <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-md">
          <h2 className="font-gyst text-3xl md:text-4xl mb-2">FAQ</h2>
          <h3 className="font-gyst text-2xl md:text-3xl mb-6">What should I bring?</h3>
          <ul className="font-gyst text-base md:text-lg space-y-2">
            <li>Two towels (one to sit on and one to dry off with)</li>
            <li>A bathing suit or clothing you&apos;re comfortable sweating and plunging in</li>
            <li>Water shoes</li>
            <li>A water bottle (no glass, please)</li>
          </ul>
        </div>
        <a
          href="#work"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <FontAwesomeIcon icon={faChevronDown} className="w-8 h-8" />
        </a>
      </section>

      {/* Gallery / Mission Section */}
      <section id="work" className="snap-section min-h-screen bg-white py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-gyst text-3xl md:text-4xl text-center mb-4">Our Mission</h2>
          <p className="font-gyst text-base md:text-lg text-center max-w-3xl mx-auto mb-12">
            At Prana Sauna, our mission is to cultivate connections and foster
            community through the power of holistic wellness. We strive to build
            meaningful relationships and create a strong network within our
            community, making a lasting presence that promotes health and well-being.
          </p>
          <Gallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-section section-contact min-h-screen py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-gyst text-3xl md:text-4xl text-center mb-4">Contact Us</h2>
          <p className="font-gyst text-base md:text-lg text-center mb-8">
            Follow us on Instagram and sign up for our email list for notification
            of community beach nights.
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href="https://www.instagram.com/pranasauna_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center hover:opacity-70 transition-opacity"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              <span className="font-gyst text-lg">@pranasauna_</span>
            </a>
            <a
              href="mailto:pranasauna@gmail.com"
              className="flex items-center gap-3 justify-center hover:opacity-70 transition-opacity"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
              <span className="font-gyst text-lg">pranasauna@gmail.com</span>
            </a>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Subscribe to our Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4 text-center">
              <span className="text-red-500">*</span> indicates required
            </p>
            <form
              action="https://gmail.us17.list-manage.com/subscribe/post?u=c096ccb7677d7f82c92eee94f&amp;id=eb764d081a&amp;f_id=00e6c3e1f0"
              method="post"
              target="_blank"
              className="space-y-4"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#455E49] focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              {/* Anti-spam honeypot */}
              <div aria-hidden="true" className="absolute -left-[5000px]">
                <input
                  type="text"
                  name="b_c096ccb7677d7f82c92eee94f_eb764d081a"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>
          </div>

          {/* FareHarbor Calendar */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div id="fareharbor-calendar" />
            <Script
              src="https://fareharbor.com/embeds/script/calendar/pranasauna/?fallback=simple&full-items=yes&flow=1557441"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#39454b] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/pranasauna_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a
              href="mailto:pranasauna@gmail.com"
              className="hover:opacity-70 transition-opacity"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">&copy; Copyright 2026 Prana Sauna</p>
        </div>
      </footer>

      {/* FareHarbor Book Now Button */}
      <Script
        src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
        strategy="lazyOnload"
      />
      <a
        href="https://fareharbor.com/embeds/book/pranasauna/?full-items=yes"
        className="fixed bottom-4 right-4 btn-primary flex items-center gap-2 shadow-lg z-50"
      >
        Book Now
      </a>
    </main>
  );
}
